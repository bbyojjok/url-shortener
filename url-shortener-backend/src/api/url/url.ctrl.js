import Joi from 'joi';
import { nanoid } from 'nanoid';
import QRCode from 'qrcode';
import Url from '../../models/url.js';

/* 단축 url 생성
POST /api/url
{
  "originalUrl": "https://example.com"
}
*/
export const create = async (ctx) => {
  const { originalUrl } = ctx.request.body;

  // validation
  const schema = Joi.object().keys({
    originalUrl: Joi.string().uri().required(),
  });
  const result = schema.validate({ originalUrl });
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  // db 로직
  // db에 originalUrl이 존재하는지 확인
  const existUrl = await Url.findOne({ originalUrl }).exec();
  if (existUrl) {
    ctx.body = existUrl;
    return;
  }

  const shortBaseUrl = `${ctx.request.origin}/`;
  console.log('shortBaseUrl:', shortBaseUrl);
  const urlCode = nanoid(10);
  const shortUrl = existUrl
    ? shortBaseUrl + existUrl.urlCode
    : shortBaseUrl + urlCode;
  const qrCode = QRCode.toString(shortUrl, { type: 'svg' }, (err) => {
    if (err) throw err;
  });

  // db에 새로저장
  const url = new Url({ originalUrl, shortUrl, urlCode, qrCode });
  try {
    await url.save();
    ctx.body = url;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 단축 url 찾기
GET /api/url/
GET /api/url/?limit=20&sort_bt=count
GET /api/url/:urlCode
*/
export const read = async (ctx) => {
  const { urlCode } = ctx.request.params;

  if (urlCode) {
    try {
      const queryResult = await Url.findOne({ urlCode }).exec();
      if (!queryResult) {
        ctx.status = 404;
        return;
      }
      ctx.body = queryResult;
    } catch (e) {
      ctx.throw(500, e);
    }
  } else {
    const { limit, sort_by } = ctx.request.query;
    const sort = {};
    if (sort_by === 'count') sort.count = -1;
    sort._id = -1;

    try {
      const queryResult = await Url.find({})
        .sort(sort)
        .limit(parseInt(limit, 10) || 10);
      if (!queryResult) {
        ctx.status = 404;
        return;
      }
      ctx.body = queryResult;
    } catch (e) {
      ctx.throw(500, e);
    }
  }
};

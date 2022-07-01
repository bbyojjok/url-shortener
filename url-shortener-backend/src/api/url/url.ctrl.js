import Joi from 'joi';
import { nanoid } from 'nanoid';
import QRCode from 'qrcode';
import Url from '../../models/url.js';

/* 단축 url 리다이렉트
GET /api/:urlCode
*/
export const redirect = async (ctx) => {
  const { urlCode } = ctx.request.params;
  console.log('# urlCode:', urlCode);

  const queryResult = await Url.findOne({ urlCode }, (err) => {
    if (err) {
      ctx.status = 401;
      ctx.body = `DB Error: ${err}`;
      return;
    }
  });
  if (queryResult) {
    const count = queryResult.count + 1;
    try {
      const updateResult = await Url.findOneAndUpdate(
        { urlCode },
        { $set: { count } },
        { new: true },
      );
      ctx.body = updateResult;
    } catch (e) {
      throw (500, e);
    }
  }
};

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
  const hasUrl = await Url.findOne({ originalUrl });
  if (hasUrl) {
    ctx.body = hasUrl;
    return;
  }

  const shortBaseUrl = `${ctx.request.origin}/`;
  const urlCode = nanoid(10);
  const shortUrl = hasUrl
    ? shortBaseUrl + hasUrl.urlCode
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
GET /api/find/
*/
export const find = async (ctx) => {
  ctx.body = 'find !';
};

/* 단축 url 통계
GET /api/stat/:urlCode
*/
export const stat = async (ctx) => {
  ctx.body = 'stat !';
};

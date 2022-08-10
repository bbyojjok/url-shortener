import Url from '../../models/url.js';

/* 단축 url 리다이렉트
GET /api/redirect/:urlCode
*/
export const redirect = async (ctx) => {
  const { urlCode } = ctx.request.params;

  if (urlCode === undefined) {
    return ctx.redirect('/');
  }

  const queryResult = await Url.findOne({ urlCode }).exec();
  if (!queryResult) {
    ctx.status = 404;
    return ctx.redirect('/error');
  }

  const count = queryResult.count + 1;
  try {
    const updateResult = await Url.findOneAndUpdate(
      { urlCode },
      { $set: { count } },
      { new: true },
    ).exec();
    return ctx.redirect(updateResult.originalUrl);
  } catch (e) {
    throw (500, e);
  }
};

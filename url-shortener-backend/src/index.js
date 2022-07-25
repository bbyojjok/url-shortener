import Dotenv from 'dotenv';
Dotenv.config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import path from 'path';
import send from 'koa-send';
import serve from 'koa-static';

import api from './api/index.js';

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MnogoDB');
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();
const __dirname = path.resolve();
const buildDirectory = path.resolve(
  __dirname,
  '../url-shortener-frontend/build',
);

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우트 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// 정적파일 위치 지정
app.use(serve(buildDirectory));
app.use(async (ctx) => {
  console.log('#ctx.path:', ctx.path);

  // Not Found이고, 주소가 /api/url로 시작하지 않거나, /stat /docs /error 일 경우
  if (
    ctx.status === 404 &&
    (ctx.path.indexOf('/api/url') === 0 ||
      ctx.path === '/stat' ||
      ctx.path === '/docs' ||
      ctx.path === '/error')
  ) {
    await send(ctx, 'index.html', { root: buildDirectory });
  } else {
    // 리다이렉트 시키기
    return ctx.redirect(`/api/redirect${ctx.path}`);
  }
});

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

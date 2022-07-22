import Dotenv from 'dotenv';
Dotenv.config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import path from 'path';
import send from 'koa-send';

import api from './api/index.js';
import { redirect } from './api/index.js';

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

// 라우터 설정
// router.use('/:urlCode?', redirect.routes());
router.use('/api', api.routes());

// 라우트 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const __dirname = path.resolve();
const buildDirectory = path.resolve(
  __dirname,
  '../url-shortener-frontend/build',
);
console.log(__dirname);
console.log(buildDirectory);
app.use(async (ctx) => {
  console.log('ctx.path:', ctx.path);
  // Not Found이고, 주소가 /api로 시작하지 않는 경우
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

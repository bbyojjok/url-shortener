import Router from 'koa-router';
import url from './url/index.js';

const api = new Router();

api.use('/url', url.routes());

export default api;

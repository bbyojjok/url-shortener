import Router from 'koa-router';
import url from './url/index.js';
import redirect from './redirect/index.js';

const api = new Router();
api.use('/url', url.routes());
api.use('/redirect', redirect.routes());

export default api;

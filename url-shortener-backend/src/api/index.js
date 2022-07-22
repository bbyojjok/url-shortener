import Router from 'koa-router';
import url from './url/index.js';
import * as urlCtrl from './url/url.ctrl.js';

const api = new Router();
api.use('/url', url.routes());

export const redirect = new Router();
redirect.get('/:urlCode?', urlCtrl.redirect);
redirect.use('/:urlCode?', redirect.routes());

export default api;

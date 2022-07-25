import Router from 'koa-router';
import * as redirectCtrl from './redirect.ctrl.js';

const redriect = new Router();

redriect.get('/:urlCode', redirectCtrl.redirect);

export default redriect;

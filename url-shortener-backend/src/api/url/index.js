import Router from 'koa-router';
import * as urlCtrl from './url.ctrl.js';

const url = new Router();

url.post('/', urlCtrl.create);
url.get('/:urlCode?', urlCtrl.read);

export default url;

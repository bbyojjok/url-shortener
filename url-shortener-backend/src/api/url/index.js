import Router from 'koa-router';
import * as urlCtrl from './url.ctrl.js';

const url = new Router();

url.get('/:urlCode', urlCtrl.redirect);
url.post('/', urlCtrl.create);

// 부가적으로 필요함
url.get('/find', urlCtrl.find);
url.get('/stat', urlCtrl.stat);

export default url;

import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import url, { urlSaga } from './url';
import stat, { statSaga } from './stat';

const rootReducer = combineReducers({ url, stat });

export function* rootSaga() {
  yield all([urlSaga(), statSaga()]);
}

export default rootReducer;

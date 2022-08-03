import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import url, { urlSaga } from './url';
import stat, { statSaga } from './stat';
import loading from './loading';

const rootReducer = combineReducers({ url, stat, loading });

export function* rootSaga() {
  yield all([urlSaga(), statSaga()]);
}

export default rootReducer;

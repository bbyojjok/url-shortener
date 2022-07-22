import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as urlAPI from '../lib/api/url';
import rootReducer from '.';

const [CREATE_URL, CREATE_URL_SUCCESS, CREATE_URL_FAILURE] =
  createRequestActionTypes('url/CREATE_URL');
const UNLOAD_URL = 'url/UNLOAD_URL';

export const createUrl = createAction(CREATE_URL, (originalUrl: string) => originalUrl);
export const unloadUrl = createAction(UNLOAD_URL);

const createUrlSaga = createRequestSaga(CREATE_URL, urlAPI.createUrl);
export function* urlSaga() {
  yield takeLatest(CREATE_URL, createUrlSaga);
}

type initialStateType = {
  shortUrl: any;
  error: any;
};
const initialState: initialStateType = {
  shortUrl: null,
  error: null,
};

const url = handleActions(
  {
    [CREATE_URL_SUCCESS]: (state: any, { payload: shortUrl }) => ({
      ...state,
      shortUrl: shortUrl.data,
    }),
    [CREATE_URL_FAILURE]: (state: any, { payload: error }) => ({ ...state, error }),
    [UNLOAD_URL]: () => initialState,
  },
  initialState,
);

export default url;

export type RootState = ReturnType<typeof rootReducer>;

import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as urlAPI from '../lib/api/url';
import rootReducer from '.';

const [FIND_URL, FIND_URL_SUCCESS, FIND_URL_FAILURE] = createRequestActionTypes('stat/FIND_URL');
const UNLOAD_FIND = 'stat/UNLOAD_FIND';

export const findUrl = createAction(FIND_URL, (urlCode: string) => urlCode);
export const unloadFind = createAction(UNLOAD_FIND);

const findUrlSaga = createRequestSaga(FIND_URL, urlAPI.findUrl);
export function* statSaga() {
  yield takeLatest(FIND_URL, findUrlSaga);
}

type initialStateType = {
  stat: any;
  statError: any;
};
const initialState: initialStateType = {
  stat: null,
  statError: null,
};

const stat = handleActions(
  {
    [FIND_URL_SUCCESS]: (state: any, { payload: stat }) => ({
      ...state,
      stat: stat.data,
    }),
    [FIND_URL_FAILURE]: (state: any, { payload: statError }) => ({ ...state, statError }),
    [UNLOAD_FIND]: () => initialState,
  },
  initialState,
);

export default stat;

export type RootState = ReturnType<typeof rootReducer>;

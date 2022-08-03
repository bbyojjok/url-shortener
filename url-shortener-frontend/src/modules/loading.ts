import { createAction, handleActions } from 'redux-actions';
import rootReducer from '.';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING, (requestType: any) => requestType);
export const finishLoading = createAction(FINISH_LOADING, (requestType: any) => requestType);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action: any) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action: any) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;

export type RootState = ReturnType<typeof rootReducer>;

import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
} from './actions';

const authResult = handleActions(
  {
    [fetchAuthSuccess]: (_state, action) => {
      return action.payload;
    },
    [fetchAuthRequest]: () => null
  },
  []
);

const authIsLoading = handleActions(
  {
    [fetchAuthRequest]: () => true,
    [fetchAuthSuccess]: () => false,
    [fetchAuthFailure]: () => false
  },
  false
);

const authError = handleActions(
  {
    [fetchAuthRequest]: () => null,
    [fetchAuthFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  authResult,
  authIsLoading,
  authError,
});
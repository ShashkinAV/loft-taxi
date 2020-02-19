import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,
} from './actions';

const registerResult = handleActions(
  {
    [fetchRegisterSuccess]: (_state, action) => action.payload,
    [fetchRegisterRequest]: () => null
  },
  []
);

const registerIsLoading = handleActions(
  {
    [fetchRegisterRequest]: () => true,
    [fetchRegisterSuccess]: () => false,
    [fetchRegisterFailure]: () => false
  },
  false
);

const registerError = handleActions(
  {
    [fetchRegisterRequest]: () => null,
    [fetchRegisterFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  registerResult,
  registerIsLoading,
  registerError,
});

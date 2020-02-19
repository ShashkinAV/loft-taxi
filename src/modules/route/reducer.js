import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchRouteRequest,
  fetchRouteSuccess,
  fetchRouteFailure,
} from './actions';

const routehResult = handleActions(
  {
    [fetchRouteSuccess]: (_state, action) => action.payload,
    [fetchRouteRequest]: () => null
  },
  []
);

const routeIsLoading = handleActions(
  {
    [fetchRouteRequest]: () => true,
    [fetchRouteSuccess]: () => false,
    [fetchRouteFailure]: () => false
  },
  false
);

const routeError = handleActions(
  {
    [fetchRouteRequest]: () => null,
    [fetchRouteFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  routehResult,
  routeIsLoading,
  routeError,
});

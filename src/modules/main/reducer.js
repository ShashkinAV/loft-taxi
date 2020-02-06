import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,

  fetchPostCardRequest,
  fetchPostCardSuccess,
  fetchPostCardFailure,

  fetchGetCardRequest,
  fetchGetCardSuccess,
  fetchGetCardFailure,

  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,

  fetchRouteRequest,
  fetchRouteSuccess,
  fetchRouteFailure,

  fetchAddressListRequest,
  fetchAddressListSuccess,
  fetchAddressListFailure
} from './actions';

const authResult = handleActions(
  {
    [fetchAuthSuccess]: (_state, action) => {
      console.log("red - "+action.payload);
      return action.payload;
    },
    [fetchAuthRequest]: () => null
  },
  []
);

const authIsLoading = handleActions(
  {
    [fetchAuthRequest]: () =>true,
    [fetchAuthSuccess]: () =>false,
    [fetchAuthFailure]: () =>false
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

const cardResult = handleActions(
  {
    [fetchGetCardSuccess]: (_state, action) => action.payload,
    [fetchGetCardRequest]: () => null
  },
  []
);

const cardIsLoading = handleActions(
  {
    [fetchGetCardRequest]: () =>true,
    [fetchGetCardSuccess]: () =>false,
    [fetchGetCardFailure]: () =>false
  },
  false
);

const cardError = handleActions(
  {
    [fetchGetCardRequest]: () => null,
    [fetchGetCardFailure]: (_state, action) => action.payload
  },
  null
);

const postCardResult = handleActions(
  {
    [fetchPostCardSuccess]: (_state, action) => action.payload,
    [fetchPostCardRequest]: () => null
  },
  []
);

const postCardIsLoading = handleActions(
  {
    [fetchPostCardRequest]: () =>true,
    [fetchPostCardSuccess]: () =>false,
    [fetchPostCardFailure]: () =>false
  },
  false
);

const postCardError = handleActions(
  {
    [fetchPostCardRequest]: () => null,
    [fetchPostCardFailure]: (_state, action) => action.payload
  },
  null
);

const registerResult = handleActions(
  {
    [fetchRegisterSuccess]: (_state, action) => action.payload,
    [fetchRegisterRequest]: () => null
  },
  []
);

const registerIsLoading = handleActions(
  {
    [fetchRegisterRequest]: () =>true,
    [fetchRegisterSuccess]: () =>false,
    [fetchRegisterFailure]: () =>false
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

const routehResult = handleActions(
  {
    [fetchRouteSuccess]: (_state, action) => action.payload,
    [fetchRouteRequest]: () => null
  },
  []
);

const routeIsLoading = handleActions(
  {
    [fetchRouteRequest]: () =>true,
    [fetchRouteSuccess]: () =>false,
    [fetchRouteFailure]: () =>false
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

const addressListResult = handleActions(
  {
    [fetchAddressListSuccess]: (_state, action) => action.payload,
    [fetchAddressListRequest]: () => null
  },
  []
);

const addressListIsLoading = handleActions(
  {
    [fetchAddressListRequest]: () =>true,
    [fetchAddressListSuccess]: () =>false,
    [fetchAddressListFailure]: () =>false
  },
  false
);

const addressListError = handleActions(
  {
    [fetchAddressListRequest]: () => null,
    [fetchAddressListFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  authResult,
  authIsLoading,
  authError,

  cardResult,
  cardIsLoading,
  cardError,

  postCardResult,
  postCardIsLoading,
  postCardError,
  
  registerResult,
  registerIsLoading,
  registerError,

  routehResult,
  routeIsLoading,
  routeError,

  addressListResult,
  addressListIsLoading,
  addressListError
});

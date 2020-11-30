import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchAddressListRequest,
  fetchAddressListSuccess,
  fetchAddressListFailure
} from './actions';

const addressListResult = handleActions(
  {
    [fetchAddressListSuccess]: (_state, action) => action.payload,
    [fetchAddressListRequest]: () => null
  },
  []
);

const addressListIsLoading = handleActions(
  {
    [fetchAddressListRequest]: () => true,
    [fetchAddressListSuccess]: () => false,
    [fetchAddressListFailure]: () => false
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
  addressListResult,
  addressListIsLoading,
  addressListError
});

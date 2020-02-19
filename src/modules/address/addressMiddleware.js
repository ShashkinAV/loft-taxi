import {
  fetchAddressListRequest,
  fetchAddressListSuccess,
  fetchAddressListFailure
} from './actions';

const host = 'https://loft-taxi.glitch.me'

export const addressMiddleware = store => next => action => {

  if (action.type === fetchAddressListRequest.toString()) {
    fetch(host + '/addressList')
      .then(response => response.json())
      .then(result => {
        store.dispatch(fetchAddressListSuccess(result));
      })
      .catch(error => {
        store.dispatch(fetchAddressListFailure(error));
      });
  }

  return next(action);
};

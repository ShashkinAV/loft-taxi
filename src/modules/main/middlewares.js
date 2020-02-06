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

const host = 'https://loft-taxi.glitch.me'

export const taxiFetchMiddleware = store => next => action => {
  if (action.type === fetchAuthRequest.toString()) {
    fetch(host + '/auth',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    })
      .then(response => response.json())
      .then(result => {
        console.log("res - "+result.success);
        store.dispatch(fetchAuthSuccess(result));
      })
      .catch(error => {
        store.dispatch(fetchAuthFailure(error));
      });
  }

  if (action.type === fetchRegisterRequest.toString()) {
    fetch(host + '/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    })
      .then(response => response.json())
      .then(result => {
        console.log("reg - "+result.success);
        store.dispatch(fetchRegisterSuccess(result));
      })
      .catch(error => {
        store.dispatch(fetchRegisterFailure(error));
      });
  }

  if (action.type === fetchPostCardRequest.toString()) {
    fetch(host + '/card',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    })
      .then(response => response.json())
      .then(result => {
        store.dispatch(fetchPostCardSuccess(result));
      })
      .catch(error => {
        store.dispatch(fetchPostCardFailure(error));
      });
  }

  if (action.type === fetchGetCardRequest.toString()) {
    fetch(host + '/card?token='+localStorage.getItem('authToken'))
      .then(response => response.json())
      .then(result => {
        store.dispatch(fetchGetCardSuccess(result));
      })
      .catch(error => {
        store.dispatch(fetchGetCardFailure(error));
      });
  }

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

  if (action.type === fetchRouteRequest.toString()) {
    fetch(host + `/route?address1=${action.payload.from}&address2=${action.payload.to}`)
      .then(response => response.json())
      .then(result => {
        store.dispatch(fetchRouteSuccess(result));
      })
      .catch(error => {
        store.dispatch(fetchRouteFailure(error));
      });
  }

  return next(action);
};

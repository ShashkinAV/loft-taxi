import {
  fetchRouteRequest,
  fetchRouteSuccess,
  fetchRouteFailure,
} from './actions';

const host = 'https://loft-taxi.glitch.me'

export const routeMiddlewares = store => next => action => {
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

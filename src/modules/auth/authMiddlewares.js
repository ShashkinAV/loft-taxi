import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
} from './actions';

const host = 'https://loft-taxi.glitch.me'

export const authMiddlewares = store => next => action => {
  if (action.type === fetchAuthRequest.toString()) {
    fetch(host + '/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    })
      .then(response => response.json())
      .then(result => {
        console.log("res - " + result.success);
        store.dispatch(fetchAuthSuccess(result));
      })
      .catch(error => {
        store.dispatch(fetchAuthFailure(error));
      });
  }

  return next(action);
};

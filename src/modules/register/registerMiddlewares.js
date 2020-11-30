import {
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,
} from './actions';

const host = 'https://loft-taxi.glitch.me'

export const registerMiddlewares = store => next => action => {
  if (action.type === fetchRegisterRequest.toString()) {
    fetch(host + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    })
      .then(response => response.json())
      .then(result => {
        console.log("reg - " + result.success);
        store.dispatch(fetchRegisterSuccess(result));
      })
      .catch(error => {
        store.dispatch(fetchRegisterFailure(error));
      });
  }

  return next(action);
};

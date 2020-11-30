
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { addressMiddleware } from './modules/address';
import { authMiddlewares } from './modules/auth';
import { cardMiddlewares } from './modules/card';
import { registerMiddlewares } from './modules/register';
import { routeMiddlewares } from './modules/route';
import rootReducer from './modules';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(addressMiddleware),
      applyMiddleware(authMiddlewares),
      applyMiddleware(cardMiddlewares),
      applyMiddleware(registerMiddlewares),
      applyMiddleware(routeMiddlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),
  );

  return store;
};

export default createAppStore;
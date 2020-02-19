import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './modules';
import { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleWare();

const createAppStore = () => {
	const store = createStore(
		rootReducer,
		{
			auth: {
				authResult: {
					success: localStorage.getItem('authSuccess')
				}
			},
			// registerResult: {
			//   success: localStorage.getItem('registerSuccess')
			// },
		},
		compose(
			applyMiddleware(sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: noop => noop,
		)
	);

	sagaMiddleware.run(rootSaga);

	return store;
};

export default createAppStore;
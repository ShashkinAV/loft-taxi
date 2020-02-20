import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import { fork } from 'redux-saga/effects';
import address from './address';
import auth from './auth';
import card from './card';
import register from './register';
import route from './route';
import { addressListSaga } from './address/addressListSaga';
import { authSaga } from './auth/authorizationSaga';
import { getPaymentSaga } from './card/paymentSaga';
import { postPaymentSaga } from './card/paymentSaga';
import { registrationSaga } from './register/registrationSaga';
import { routeSaga } from './route/routeSaga';

export default combineReducers({
	address,
	auth,
	card,
	register,
	route,
	form
});

export function* rootSaga() {
	yield fork(addressListSaga);
	yield fork(authSaga);
	yield fork(getPaymentSaga);
	yield fork(postPaymentSaga);
	yield fork(registrationSaga);
	yield fork(routeSaga);
}
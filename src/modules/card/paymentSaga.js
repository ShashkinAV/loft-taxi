import { takeEvery, call, put } from 'redux-saga/effects';
import {
	fetchPostCardRequest,
	fetchPostCardSuccess,
	fetchPostCardFailure,

	fetchGetCardRequest,
	fetchGetCardSuccess,
	fetchGetCardFailure
} from './actions';

const host = 'https://loft-taxi.glitch.me';

export const getPayment = () =>
	fetch(host + '/card?token=' + localStorage.getItem('authToken'))
		.then(response => response.json());

export const postPayment = (action) =>
	fetch(host + '/card', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(action.payload)
	})
		.then(response => response.json());

export function* getPaymentSagaWorker() {
	try {
		const result = yield call(getPayment);
		yield put(fetchGetCardSuccess(result));
	} catch (error) {
		yield put(fetchGetCardFailure(error));
	}
}

export function* getPaymentSaga() {
	yield takeEvery(fetchGetCardRequest, getPaymentSagaWorker);
}

export function* postPaymentSagaWorker(action) {
	try {
		const result = yield call(postPayment, action);
		yield put(fetchPostCardSuccess(result));
	} catch (error) {
		yield put(fetchPostCardFailure(error));
	}
}

export function* postPaymentSaga() {
	yield takeEvery(fetchPostCardRequest, postPaymentSagaWorker);
}
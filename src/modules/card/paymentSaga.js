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

const getPayment = () =>
	fetch(host + '/card?token=' + localStorage.getItem('authToken'))
		.then(response => response.json());

const postPayment = (action) =>
	fetch(host + '/card', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(action.payload)
	})
		.then(response => response.json());

export function* getPaymentSaga() {
	yield takeEvery(fetchGetCardRequest, function* () {
		try {
			const result = yield call(getPayment);
			yield put(fetchGetCardSuccess(result));
		} catch (error) {
			yield put(fetchGetCardFailure(error));
		}
	});
}

export function* postPaymentSaga() {
	yield takeEvery(fetchPostCardRequest, function* (action) {
		try {
			const result = yield call(postPayment, action);
			yield put(fetchPostCardSuccess(result));
		} catch (error) {
			yield put(fetchPostCardFailure(error));
		}
	});
}
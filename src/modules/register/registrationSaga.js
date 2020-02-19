import { takeEvery, call, put } from 'redux-saga/effects';
import {
	fetchRegisterRequest,
	fetchRegisterSuccess,
	fetchRegisterFailure
} from './actions';

const host = 'https://loft-taxi.glitch.me';

const postRegistration = (action) =>
	fetch(host + '/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(action.payload)
	})
		.then(response => response.json());

export function* registrationSaga() {
	yield takeEvery(fetchRegisterRequest, function* (action) {
		try {
			const result = yield call(postRegistration, action);
			console.log("registerSaga!")
			yield put(fetchRegisterSuccess(result));
		} catch (error) {
			yield put(fetchRegisterFailure(error));
		}
	});
}
import { takeEvery, call, put } from 'redux-saga/effects';
import {
	fetchAuthRequest,
	fetchAuthSuccess,
	fetchAuthFailure,
} from './actions';

const host = 'https://loft-taxi.glitch.me';

export const postAuth = (action) =>
	fetch(host + '/auth', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(action.payload)
	}).then(response => response.json());

export function* authSaga() {

	yield takeEvery(fetchAuthRequest, function* (action) {
		try {
			const result = yield call(postAuth, action);
			yield put(fetchAuthSuccess(result));
		} catch (error) {
			yield put(fetchAuthFailure(error));
		}
	});
}
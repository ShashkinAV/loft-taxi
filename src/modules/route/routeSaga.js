import { takeEvery, call, put } from 'redux-saga/effects';
import {
	fetchRouteRequest,
	fetchRouteSuccess,
	fetchRouteFailure
} from './actions';

const host = 'https://loft-taxi.glitch.me';

const getRoute = (action) =>
	fetch(host + `/route?address1=${action.payload.address1}&address2=${action.payload.address2}`).then(response =>
		response.json(),
	);

export function* routeSaga() {
	yield takeEvery(fetchRouteRequest, function* (action) {
		try {
			const result = yield call(getRoute, action);
			yield put(fetchRouteSuccess(result));
		} catch (error) {
			yield put(fetchRouteFailure(error));
		}
	});
}
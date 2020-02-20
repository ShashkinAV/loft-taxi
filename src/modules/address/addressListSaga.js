import { takeEvery, call, put } from 'redux-saga/effects';
import {
	fetchAddressListRequest,
	fetchAddressListSuccess,
	fetchAddressListFailure
} from './actions';

const host = 'https://loft-taxi.glitch.me';

export const getAddressList = () =>
	fetch(host + '/addressList').then(response => response.json());

export function* addressListSagaWorker() {
	try {
		const result = yield call(getAddressList);
		yield put(fetchAddressListSuccess(result));
	} catch (error) {
		yield put(fetchAddressListFailure(error));
	}
}

export function* addressListSaga() {
	yield takeEvery(fetchAddressListRequest, addressListSagaWorker);
}
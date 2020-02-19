import { takeEvery, call, put } from 'redux-saga/effects';
import {
	fetchAddressListRequest,
	fetchAddressListSuccess,
	fetchAddressListFailure
} from './actions';

const host = 'https://loft-taxi.glitch.me';

const getAddressList = () =>
	fetch(host + '/addressList').then(response =>
		response.json(),
	);


export function* addressListSaga() {
	yield takeEvery(fetchAddressListRequest, function* () {
		try {
			const result = yield call(getAddressList);
			yield put(fetchAddressListSuccess(result));
		} catch (error) {
			yield put(fetchAddressListFailure(error));
		}
	});
}
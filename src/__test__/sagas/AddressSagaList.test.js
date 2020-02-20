import { put, call } from 'redux-saga/effects';
import { addressListSagaWorker } from '../../modules/address/addressListSaga.js';
import { getAddressList } from '../../modules/address/addressListSaga.js';
import { fetchAddressListSuccess } from '../../modules/address/actions.js';

describe('test addressListSaga', () => {
    const gen = addressListSagaWorker();

    it('calls addressListSaga', () => {
        expect(gen.next().value).toEqual(call(getAddressList));
    })

    it('dispatches success addressListSaga', () => {
        const responseData = {
            addresses: ['Test']
        }

        expect(gen.next(responseData).value)
            .toEqual(put(fetchAddressListSuccess(responseData)));
    });

    it('addressListSaga done', () => {
        expect(gen.next().done).toEqual(true);
    });
});
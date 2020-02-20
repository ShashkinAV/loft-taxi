import { put, call } from 'redux-saga/effects';
import { postPaymentSagaWorker } from '../../modules/card/paymentSaga.js';
import { postPayment } from '../../modules/card/paymentSaga.js';
import { fetchPostCardSuccess } from '../../modules/card/actions.js';
import { getPaymentSagaWorker } from '../../modules/card/paymentSaga.js';
import { getPayment } from '../../modules/card/paymentSaga.js';
import { fetchGetCardSuccess } from '../../modules/card/actions.js';

describe('test postCardSaga', () => {
    const gen = postPaymentSagaWorker();

    it('calls postCardSaga', () => {
        expect(gen.next().value).toEqual(call(postPayment, undefined));
    });

    it('dispatches success postCardSaga', () => {
        const responseData = {
            success: true
        }

        expect(gen.next(responseData).value)
            .toEqual(put(fetchPostCardSuccess(responseData)));
    });

    it('routeSaga done', () => {
        expect(gen.next().done).toEqual(true);
    });
});

describe('test getCardSaga', () => {
    const gen = getPaymentSagaWorker();

    it('calls postCardSaga', () => {
        expect(gen.next().value).toEqual(call(getPayment));
    });

    it('dispatches success getCardSaga', () => {
        const responseData = {
            success: true
        }

        expect(gen.next(responseData).value)
            .toEqual(put(fetchGetCardSuccess(responseData)));
    });

    it('getCardSaga done', () => {
        expect(gen.next().done).toEqual(true);
    });
});
import { put, call } from 'redux-saga/effects';
import { registrationSagaWorker } from '../../modules/register/registrationSaga.js';
import { postRegistration } from '../../modules/register/registrationSaga.js';
import { fetchRegisterSuccess } from '../../modules/register/actions.js';

describe('test registerSaga', () => {
    const gen = registrationSagaWorker();

    it('calls registerAction', () => {
        expect(gen.next().value).toEqual(call(postRegistration, undefined));
    })

    it('dispatches success registerSaga', () => {
        const responseData = {
            success: true,
            token: 'test'
        }

        expect(gen.next(responseData).value)
            .toEqual(put(fetchRegisterSuccess(responseData)));
    });

    it('registerAction done', () => {
        expect(gen.next().done).toEqual(true);
    });
});
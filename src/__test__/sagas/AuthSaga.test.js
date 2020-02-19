import { put, call } from 'redux-saga/effects';
import { authSaga } from '../../modules/auth/authorizationSaga.js';
import { postAuth } from '../../modules/auth/authorizationSaga.js';
import { fetchAuthSuccess } from '../../modules/auth/actions.js';

describe('test_authSaga', () => {

	// const gen = sagas.authSaga();

	it('calls action', () => {
		expect(authSaga().next().value)
			.toEqual(call(postAuth, undefined))
	})

	it('dispatches success action', () => {
		expect(authSaga().next({ success: true, token: 'some_token' }).value)
			.toEqual(put(fetchAuthSuccess({ success: true, token: 'some_token' })))
	})

})
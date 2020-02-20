import { put, call } from 'redux-saga/effects';
import { authSagaWorker } from '../../modules/auth/authorizationSaga.js';
import { postAuth } from '../../modules/auth/authorizationSaga.js';
import { fetchAuthSuccess } from '../../modules/auth/actions.js';

describe('test authSaga', () => {
	const gen = authSagaWorker();

	it('calls authAction', () => {
		expect(gen.next().value).toEqual(call(postAuth, undefined));
	});

	it('dispatches success authAction', () => {
		const responseData = {
			success: true,
			token: 'test'
		}

		expect(gen.next(responseData).value)
			.toEqual(put(fetchAuthSuccess(responseData)));
	});

	it('authAction done', () => {
		expect(gen.next().done).toEqual(true);
	});
});
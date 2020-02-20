import { put, call } from 'redux-saga/effects';
import { routeSagaWorker } from '../../modules/route/routeSaga .js';
import { getRoute } from '../../modules/route/routeSaga .js';
import { fetchRouteSuccess } from '../../modules/route/actions.js';

describe('test routeSaga', () => {
    const gen = routeSagaWorker();

    it('calls routeSaga', () => {
        expect(gen.next().value).toEqual(call(getRoute, undefined));
    });

    it('dispatches success routeSaga', () => {
        const responseData = {
            success: true
        }

        expect(gen.next(responseData).value)
            .toEqual(put(fetchRouteSuccess(responseData)));
    });

    it('routeSaga done', () => {
        expect(gen.next().done).toEqual(true);
    });
});
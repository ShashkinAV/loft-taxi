import reducer from '../../modules/route';
import * as actions from '../../modules/route/actions';

describe('route_reducer', () => {
    it('ROUTE_REQUEST', () => {

        const routeInitialState = {
            routehResult: null,
            routeIsLoading: false,
            routeError: null,
        }

        const initialState = {
            route: routeInitialState
        }

        const action = {
            type: actions.fetchRouteRequest,
        }

        expect(reducer(initialState, action)).toEqual({
            ...routeInitialState,
            routeIsLoading: true,
        });
    });

    it('ROUTE_AFTER_ERROR', () => {

        const routeInitialState = {
            routehResult: [],
            routeIsLoading: false,
            routeError: 'Error',
        }

        const initialState = {
            route: routeInitialState
        }

        const action = {
            type: actions.fetchRouteReques,
        }

        expect(reducer(initialState, action)).toEqual({
            ...routeInitialState,
            routeIsLoading: true,
            routeError: null,
        });
    });

    it('ROUTE_SUCCESS', () => {

        const routeInitialState = {
            routehResult: [],
            routeIsLoading: false,
            routeError: null,
        }

        const initialState = {
            register: routeInitialState
        }

        const action = {
            type: actions.fetchRouteSuccess,
            payload: { address1: "address1", address2: "address2" },
        }

        expect(reducer(initialState, action)).toEqual({
            ...routeInitialState,
            routeIsLoading: false,
            routehResult: action.payload,
        });
    });

});
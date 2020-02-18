import reducer from '../modules/auth';
import * as actions from '../modules/auth/actions';

describe('auth_reducer', () => {
  it('AUTH_REQUEST', () => {

    const authReducerInitialState = {
        authError: null,
        authIsLoading: false,
        authResult: null
    }

    const initialState = {
        auth: authReducerInitialState
    }

    const action = {
        type: actions.fetchAuthRequest,
    }

    expect(reducer(initialState, action)).toEqual({
        ...authReducerInitialState,
        authIsLoading: true,
    });
});

it('AUTH_REQUEST_AFTER_ERROR', () => {

    const authReducerInitialState = {
        authError: 'Error',
        authIsLoading: false,
        authResult: null,
    }

    const initialState = {
      auth: authReducerInitialState
    }

    const action = {
        type: actions.fetchAuthRequest,
    }

    expect(reducer(initialState, action)).toEqual({
        ...authReducerInitialState,
        authIsLoading: true,
        authError: null,
    });
});

it('AUTH_SUCCESS', () => {

    const authReducerInitialState = {
        authError: null,
        authIsLoading: true,
        authResult: null,
    }

    const initialState = {
      auth: authReducerInitialState
    }

    const action = {
        type: actions.fetchAuthSuccess,
        payload: {result: true, token: 'AUTH_TOKEN'},
    }

    expect(reducer(initialState, action)).toEqual({
        ...authReducerInitialState,
        authIsLoading: false,
        authResult: action.payload,
    });
  });
});

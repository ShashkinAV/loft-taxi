import reducer from '../modules/register';
import * as actions from '../modules/register/actions';

describe('register_reducer', () => {
  it('REGISTER_REQUEST', () => {

    const registerReducerInitialState = {
        registerError: null,
        registerIsLoading: false,
        registerResult: null
    }

    const initialState = {
        register: registerReducerInitialState
    }

    const action = {
        type: actions.fetchRegisterRequest,
    }

    expect(reducer(initialState, action)).toEqual({
        ...registerReducerInitialState,
        registerIsLoading: true,
    });
});

it('AUTH_REQUEST_AFTER_ERROR', () => {

    const registerReducerInitialState = { 
        registerError: 'Error',
        registerIsLoading: false,
        registerResult: null,
    }

    const initialState = {
      register: registerReducerInitialState
    }

    const action = {
        type: actions.fetchRegisterRequest,
    }

    expect(reducer(initialState, action)).toEqual({
        ...registerReducerInitialState,
        registerIsLoading: true,
        registerError: null,
    });
});

it('AUTH_SUCCESS', () => {

    const registerReducerInitialState = {
      registerError: null,
      registerIsLoading: true,
      registerResult: null,
    }

    const initialState = {
      register: registerReducerInitialState
    }

    const action = {
        type: actions.fetchRegisterSuccess,
        payload: {result: true, token: 'AUTH_TOKEN'},
    }

    expect(reducer(initialState, action)).toEqual({
        ...registerReducerInitialState,
        registerIsLoading: false,
        registerResult: action.payload,
    });
  });
});

import reducer from '../../modules/card';
import * as actions from '../../modules/card/actions';

describe('card_reducer', () => {
    it('CARD_POST_REQUEST', () => {

        const postCardReducerInitialState = {
            cardResult: [],
            cardIsLoading: false,
            cardError: null,

            postCardError: null,
            postCardIsLoading: false,
            postCardResult: null
        }

        const initialState = {
            card: postCardReducerInitialState
        }

        const action = {
            type: actions.fetchPostCardRequest,
        }

        expect(reducer(initialState, action)).toEqual({
            ...postCardReducerInitialState,
            postCardIsLoading: true,
        });
    });

    it('CARD_POST_AFTER_ERROR', () => {

        const postCardReducerInitialState = {
            cardResult: [],
            cardIsLoading: false,
            cardError: null,

            postCardError: 'Error',
            postCardIsLoading: false,
            postCardResult: null
        }

        const initialState = {
            card: postCardReducerInitialState
        }

        const action = {
            type: actions.fetchPostCardRequest,
        }

        expect(reducer(initialState, action)).toEqual({
            ...postCardReducerInitialState,
            postCardIsLoading: true,
            postCardError: null,
        });
    });

    it('REGISTER_SUCCESS', () => {

        const postCardReducerInitialState = {
            cardResult: [],
            cardIsLoading: false,
            cardError: null,

            postCardError: null,
            postCardIsLoading: true,
            postCardResult: null
        }

        const initialState = {
            card: postCardReducerInitialState
        }

        const action = {
            type: actions.fetchPostCardSuccess,
            payload: { cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: "AUTH_TOKEN" },
        }

        expect(reducer(initialState, action)).toEqual({
            ...postCardReducerInitialState,
            postCardIsLoading: false,
            postCardResult: action.payload,
        });
    });

});
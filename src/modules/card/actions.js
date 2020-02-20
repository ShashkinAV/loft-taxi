import { createAction } from 'redux-actions';

export const fetchPostCardRequest = createAction('FETCH_POST_CARD_REQUEST');
export const fetchPostCardSuccess = createAction('FETCH_POST_CARD_SUCCESS');
export const fetchPostCardFailure = createAction('FETCH_POST_CARD_FAILURE');

export const fetchGetCardRequest = createAction('FETCH_GET_CARD_REQUEST');
export const fetchGetCardSuccess = createAction('FETCH_GET_CARD_SUCCESS');
export const fetchGetCardFailure = createAction('FETCH_GET_CARD_FAILURE');

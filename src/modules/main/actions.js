import { createAction } from 'redux-actions';

export const fetchAuthRequest = createAction('FETCH_AUTH_REQUEST');
export const fetchAuthSuccess = createAction('FETCH_AUTH_SUCCESS');
export const fetchAuthFailure = createAction('FETCH_AUTH_FAILURE');

export const fetchPostCardRequest = createAction('FETCH_POST_CARD_REQUEST');
export const fetchPostCardSuccess = createAction('FETCH_POST_CARD_SUCCESS');
export const fetchPostCardFailure = createAction('FETCH_POST_CARD_FAILURE');

export const fetchGetCardRequest = createAction('FETCH_GET_CARD_REQUEST');
export const fetchGetCardSuccess = createAction('FETCH_GET_CARD_SUCCESS');
export const fetchGetCardFailure = createAction('FETCH_GET_CARD_FAILURE');

export const fetchRegisterRequest = createAction('FETCH_REGISTER_REQUEST');
export const fetchRegisterSuccess = createAction('FETCH_REGISTER_SUCCESS');
export const fetchRegisterFailure = createAction('FETCH_REGISTER_FAILURE');

export const fetchRouteRequest = createAction('FETCH_ROUTE_REQUEST');
export const fetchRouteSuccess = createAction('FETCH_ROUTE_SUCCESS');
export const fetchRouteFailure = createAction('FETCH_ROUTE_FAILURE');

export const fetchAddressListRequest = createAction('FETCH_ADDRESSLIST_REQUEST');
export const fetchAddressListSuccess = createAction('FETCH_ADDRESSLIST_SUCCESS');
export const fetchAddressListFailure = createAction('FETCH_ADDRESSLIST_FAILURE');
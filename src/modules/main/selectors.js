import { createSelector } from 'reselect'

export const getAuthIsLoading = state => state.main.authIsLoading
export const getAuthError = state => state.main.authError
export const getAuth = createSelector(
    state => state.main.authResult,
    authResult => authResult,
)

export const getRegisterIsLoading = state => state.main.registerIsLoading
export const getRegisterError = state => state.main.registerError
export const getRegister = createSelector(
    state => state.main.registerResult,
    registerResult => registerResult,
)

export const cardIsLoading = state => state.main.cardIsLoading
export const cardError = state => state.main.cardError
export const getCard = createSelector(
    state => state.mainReducer.cardResult,
    cardResult => cardResult,
)

export const getPostCardIsLoading = state => state.main.postCardIsLoading
export const getPostCardError = state => state.main.postCardError
export const getPostCard = createSelector(
    state => state.main.postCardResult,
    postCardResult => postCardResult,
)

export const getAddressListIsLoading = state => state.main.addressListIsLoading
export const getAddressListError = state => state.main.addressListError
export const getAddressList = createSelector(
    state => state.main.addressListElements,
    addressListElements => addressListElements,
)

export const routeListIsLoading = state => state.main.routeListIsLoading
export const routeListError = state => state.main.routeListError
export const getRouteList = createSelector(
    state => state.mainReducer.routeList,
    routeList => routeList,
)
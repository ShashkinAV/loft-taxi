import { createSelector } from 'reselect';

export const getAuthIsLoading = state => state.auth.authIsLoading
export const getAuthError = state => state.auth.authError
export const getAuth = createSelector(
    state => state.auth.authResult,
    authResult => authResult,
)
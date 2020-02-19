import { createSelector } from 'reselect'

export const routeIsLoading = state => state.route.routeIsLoading
export const routeError = state => state.route.routeError
export const getRoute = createSelector(
    state => state.route.routehResult,
    routehResult => routehResult,
)
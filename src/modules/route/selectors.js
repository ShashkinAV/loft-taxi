import { createSelector } from 'reselect'

export const routeListIsLoading = state => state.route.routeListIsLoading
export const routeListError = state => state.route.routeListError
export const getRouteList = createSelector(
    state => state.route.routeList,
    routeList => routeList,
)
import { createSelector } from 'reselect'

export const getRegisterIsLoading = state => state.register.registerIsLoading
export const getRegisterError = state => state.register.registerError
export const getRegister = createSelector(
    state => state.register.registerResult,
    registerResult => registerResult,
)

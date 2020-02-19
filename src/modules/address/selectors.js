import { createSelector } from 'reselect'

export const getAddressListIsLoading = state => state.address.addressListIsLoading
export const getAddressListError = state => state.address.addressListError
export const getAddressList = createSelector(
	state => state.address.addressListResult,
	addressListResult => addressListResult,
)
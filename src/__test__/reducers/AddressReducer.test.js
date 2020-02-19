import reducer from '../../modules/address';
import * as actions from '../../modules/address/actions';

describe('register_reducer', () => {
	it('ADDRESS_LIST_REQUEST', () => {

		const addressListReducerInitialState = {
			addressListError: null,
			addressListIsLoading: false,
			addressListResult: null
		}

		const initialState = {
			addressList: addressListReducerInitialState
		}

		const action = {
			type: actions.fetchAddressListRequest,
		}

		expect(reducer(initialState, action)).toEqual({
			...addressListReducerInitialState,
			addressListIsLoading: true,
		});
	});

	it('ADDRESS_LIST_SUCCESS', () => {

		const addressListReducerInitialState = {
			addressListError: null,
			addressListIsLoading: true,
			addressListResult: null,
		}

		const initialState = {
			register: addressListReducerInitialState
		}

		const action = {
			type: actions.fetchAddressListSuccess,
			payload: { "addresses": ["Пулково (LED)", "Шаверма на Невском", "Инфекционная больница им. Боткина", "Волковское кладбище"] }
		}

		expect(reducer(initialState, action)).toEqual({
			...addressListReducerInitialState,
			addressListIsLoading: false,
			addressListResult: action.payload,
		});
	});
});
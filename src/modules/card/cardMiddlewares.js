import {
	fetchPostCardRequest,
	fetchPostCardSuccess,
	fetchPostCardFailure,

	fetchGetCardRequest,
	fetchGetCardSuccess,
	fetchGetCardFailure
} from './actions';

const host = 'https://loft-taxi.glitch.me'

export const cardMiddlewares = store => next => action => {
	if (action.type === fetchPostCardRequest.toString()) {
		fetch(host + '/card', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(action.payload),
		})
			.then(response => response.json())
			.then(result => {
				store.dispatch(fetchPostCardSuccess(result));
			})
			.catch(error => {
				store.dispatch(fetchPostCardFailure(error));
			});
	}

	if (action.type === fetchGetCardRequest.toString()) {
		fetch(host + '/card?token=' + localStorage.getItem('authToken'))
			.then(response => response.json())
			.then(result => {
				store.dispatch(fetchGetCardSuccess(result));
			})
			.catch(error => {
				store.dispatch(fetchGetCardFailure(error));
			});
	}

	return next(action);
};
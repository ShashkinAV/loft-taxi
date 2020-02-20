import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchPostCardRequest,
  fetchPostCardSuccess,
  fetchPostCardFailure,

  fetchGetCardRequest,
  fetchGetCardSuccess,
  fetchGetCardFailure
} from './actions';

const cardResult = handleActions(
  {
    [fetchGetCardSuccess]: (_state, action) => action.payload,
    [fetchGetCardRequest]: () => null
  },
  []
);

const cardIsLoading = handleActions(
  {
    [fetchGetCardRequest]: () => true,
    [fetchGetCardSuccess]: () => false,
    [fetchGetCardFailure]: () => false
  },
  false
);

const cardError = handleActions(
  {
    [fetchGetCardRequest]: () => null,
    [fetchGetCardFailure]: (_state, action) => action.payload
  },
  null
);

const postCardResult = handleActions(
  {
    [fetchPostCardSuccess]: (_state, action) => action.payload,
    [fetchPostCardRequest]: () => null
  },
  []
);

const postCardIsLoading = handleActions(
  {
    [fetchPostCardRequest]: () => true,
    [fetchPostCardSuccess]: () => false,
    [fetchPostCardFailure]: () => false
  },
  false
);

const postCardError = handleActions(
  {
    [fetchPostCardRequest]: () => null,
    [fetchPostCardFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  cardResult,
  cardIsLoading,
  cardError,

  postCardResult,
  postCardIsLoading,
  postCardError,
});

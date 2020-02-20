import { createSelector } from 'reselect'

export const cardIsLoading = state => state.card.cardIsLoading
export const cardError = state => state.card.cardError
export const getCard = createSelector(
    state => state.card.cardResult,
    cardResult => cardResult,
)

export const getPostCardIsLoading = state => state.card.postCardIsLoading
export const getPostCardError = state => state.card.postCardError
export const getPostCard = createSelector(
    state => state.card.postCardResult,
    postCardResult => postCardResult,
)

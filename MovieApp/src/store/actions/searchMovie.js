import { store } from '../';
import * as types from "../types";



export function searchMovieAction(addedMovie) {
    const state = store.getState();
    if (state.movies) {
        if (state.movies.some(item => item.Title === addedMovie.Title)) {
            return { payload: state.movies, type: types.SEARCH_MOVIE };
        }
        return {
            type: types.SEARCH_MOVIE,
            payload: [addedMovie, ...state.movies],
        };
    }
    return {
        payload: [addedMovie],
        type: types.SEARCH_MOVIE,
    };
}
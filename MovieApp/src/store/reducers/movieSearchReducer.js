import * as types from '../types';

const INITIAL_STATE = {
    searchMovieList: []

};


export default function SearchReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SEARCH_MOVIE:
            return {       

              ...state,       
              searchMovieList: [...state.searchMovieList, action.payload]
            };
        default:
            return state;
    }
}

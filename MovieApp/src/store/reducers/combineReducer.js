import { combineReducers } from "redux";
import SearchReducer from "./movieSearchReducer";


export default combineReducers({

    searchMovie: SearchReducer

})
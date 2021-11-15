import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import combineReducers from "./reducers/combineReducer";


const middleware = applyMiddleware(Thunk, Logger);

const config = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(config, combineReducers);
const store = createStore(persistedReducer, {}, middleware);
const presistor = persistStore(store);

export { store, presistor };

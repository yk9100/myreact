import {createStore, combineReducers} from 'redux';

import { tabbarReducer } from './reducers/tabbarReducer';
const reducers = combineReducers({
    tabbarReducer,
});



const store = createStore(reducers);

export default store;
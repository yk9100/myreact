import {createStore, combineReducers} from 'redux';

import { tabbarReducer } from './reducers/tabbarReducer';
import { loginReducer } from './reducers/loginReducer';
const reducers = combineReducers({
    tabbarReducer,
    loginReducer
});



const store = createStore(reducers);

export default store;
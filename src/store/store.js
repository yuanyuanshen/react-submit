import {createStore, combineReducers} from 'redux'
import * as cashout from './cashout/reducer';

let store = createStore(
  combineReducers({...cashout})
);

export default store;
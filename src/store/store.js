import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as cashout from './cashout/reducer';
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({...cashout}),
  applyMiddleware(thunk)
);

export default store;
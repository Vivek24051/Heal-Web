import { createStore } from '@reduxjs/toolkit';

import { combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { diseaReducer } from './reducers/diseaReducer';

const reducer = combineReducers({
  diseas: diseaReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
// console.log(store);

export default store;

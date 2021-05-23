import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reduxer';
import Thunk from 'redux-thunk';
const middlewares = [Thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(...enhancers);

const store = createStore(
  rootReducer,
  {},
  composedEnhancers
);

export default store;

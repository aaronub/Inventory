import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import itemsReducer from './items';
import itemReducer from './item';
import orderReducer from './order';

const rootReducer = combineReducers({
  items: itemsReducer,
  item: itemReducer,
  order: orderReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk, loggingMiddleware)
);

import { createStore, combineReducers } from 'redux';
import button from './reducers/button'

const combinedReducer = combineReducers({
  button
});


export default createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

import { combineReducers, legacy_createStore as createStore } from 'redux';
import button from './reducers/button';

export function createDemoStore() {
  return createStore(combineReducers({ button }));
}

export default createDemoStore();

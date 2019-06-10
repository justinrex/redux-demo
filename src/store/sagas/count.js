import { call, takeEvery } from 'redux-saga/effects';
import { INCREMENT_COUNT } from '../constants/button';

export function* increment() {
  // yield call(console.log('increment')); // dont need yield call, just adding for later
}

export default [
  takeEvery(INCREMENT_COUNT, increment)
];

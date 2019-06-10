import { all } from 'redux-saga/effects';
import countSagas from './count';

export default function* rootSaga() {
  yield all([
    ...countSagas
  ]);
}

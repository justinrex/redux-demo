import { createSelector } from 'reselect';
import count from './count';

export default createSelector(
  [count, (_state, multiplier = 20) => multiplier],
  (value, multiplier) => value * multiplier,
);

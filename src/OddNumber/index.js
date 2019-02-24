import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import buttonCountSelector from '../store/selectors/button/count';
import oddNumbersSelector from '../store/selectors/button/oddNumbers';

const OddNumber = ({ odd }) => (
  <div data-tag="OddNumber">
    <br />
    <br />
    <br />
    { odd && 'ODD NUMBER'}
  </div>
);

const isOddNumber = createSelector(
  [buttonCountSelector, oddNumbersSelector],
  (count, oddNumbers) => oddNumbers.includes(count),
);

const mapStateToProps = state => ({
  odd: isOddNumber(state)
});

export default connect(mapStateToProps)(OddNumber);

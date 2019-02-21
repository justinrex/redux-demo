import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

const OddNumber = ({ odd }) => {
  console.log('odd number render')

  return (
    <div>
      <br /><br /><br />
      { odd && 'ODD NUMBER'}
    </div>
  )
}

const countSelector = (state) => state.button.count
const oddNumbersSelector = (state) => state.button.oddNumbers

const isOddNumber =
  createSelector(
    [countSelector, oddNumbersSelector],
    (count, oddNumbers) => {
      console.log('calculating odd number')
      return oddNumbers.includes(count)
    }
  )

const mapOddStateToProps = (state) => ({
  odd: isOddNumber(state)
})

export default connect(mapOddStateToProps)(OddNumber);
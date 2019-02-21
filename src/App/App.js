import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import './App.css';

import { incrementCount, incrementHover } from '../store/actions/button'

// ----------------------------------------------------- //

const Button = ({ incrementCount, incrementHover }) => (
  <button
    className="clickableButton"
    onClick={incrementCount}
    onMouseOver={incrementHover}
  >
    Click me
  </button>
)

const mapDispatchToProps = {
  incrementCount,
  incrementHover
}

const ButtonContainer = connect(null, mapDispatchToProps)(Button);


// ----------------------------------------------------- //
const Count = ({ count }) => {
  console.log('rendering count')

  return (
    <div className="count">
      clicked { count } times
    </div>
  )
}

// ----------------------------------------------------- //

const mapStateToProps = (state) => ({
  count: state.button.count
})

const CountContainer = connect(mapStateToProps)(Count);

// ----------------------------------------------------- //

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

// const isOddNumber = (state) => {
//   console.log('calculating odd number')

//   const { count, oddNumbers } = state.button;

//   return oddNumbers.includes(count)
// }

const mapOddStateToProps = (state) => ({
  odd: isOddNumber(state)
})

const OddNumberContainer = connect(mapOddStateToProps)(OddNumber);

// ----------------------------------------------------- //

const App = () => (
  <div className="App">
      <div>
        <ButtonContainer />
        <CountContainer />
        <OddNumberContainer />
      </div>
  </div>
)

export default App;

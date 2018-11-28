import React from 'react';
import { connect } from 'react-redux';
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

// ----------------------------------------------------- //
const Count = ({ count = 0 }) => {
  console.log('rendering count')

  return (
  <div className="count">
    clicked { count } times
  </div>
)
  }

const mapStateToProps = (state) => ({
  count: state.button.count // buttonCountSelector(state)
})

const CountContainer = connect(mapStateToProps)(Count);



// ----------------------------------------------------- //

const App = ({ incrementCount, incrementHover }) => {
  console.log('render app')
  return (
  <div className="App">
      <div>
        <Button incrementCount={incrementCount} incrementHover={incrementHover} />
        <CountContainer />
      </div>
  </div>
)
  };



const mapDispatchToProps = {
  incrementCount,
  incrementHover
}

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;

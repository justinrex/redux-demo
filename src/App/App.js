import React from 'react';
import './App.css';
import store from '../store';
import { INCREMENT_COUNT } from '../store/constants/button'

// ----------------------------------------------------- //

const Button = () => (
  <button
    className="clickableButton"
    onClick={() => store.dispatch({ type: INCREMENT_COUNT })}
  >
    Click me
  </button>
)

// ----------------------------------------------------- //

const Count = () => (
  <div className="count">
    clicked { store.getState().button.count } times
  </div>
)

// ----------------------------------------------------- //

const App = () => (
  <div className="App">
      <div>
        <Button />
        <Count />
      </div>
  </div>
);

export default App;

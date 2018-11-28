import React from 'react';
import './App.css';
import store from '../store';
import { INCREMENT_COUNT } from '../store/constants/counter'

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
  <div>
    count { store.getState().button.count }
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

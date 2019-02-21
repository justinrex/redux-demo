import React from 'react';
import ButtonContainer from '../Button'
import CountContainer from '../Count'
import OddNumberContainer from '../OddNumber'
import './App.css';

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

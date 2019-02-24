import React from 'react';
import ButtonContainer from '../Button';
import CountContainer from '../Count';
import OddNumberContainer from '../OddNumber';
import './App.css';

const App = ({ trackBreadCrumb }) => (
  <div
    className="App"
    onKeyDown={({ type, target }) => {
      trackBreadCrumb({
        variables: {
          element: target.getAttribute('data-tag'),
          type
        }
      });
    }}
  >
    <div>
      <ButtonContainer />
      <CountContainer />
      <OddNumberContainer />
    </div>
  </div>
);

export default App;

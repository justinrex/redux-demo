import React from 'react';
import { func } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav';
import LifeCycle from '../LifeCycle';
import Refs from '../Refs';
import ButtonDemo from '../ButtonDemo';
import './App.css';

const handleKeyDown = trackBreadCrumb => ({ type, target }) => {
  trackBreadCrumb({
    variables: {
      element: target.getAttribute('data-tag'),
      type
    }
  });
};

const App = ({ trackBreadCrumb }) => (
  <div
    className="App"
    onKeyDown={handleKeyDown(trackBreadCrumb)}
    role="presentation"
  >
    <Nav />
    <Switch>
      <Route exact path="/" component={ButtonDemo} />
      <Route path="/demo" component={ButtonDemo} />
      <Route path="/lifecycle" component={LifeCycle} />
      <Route path="/refs" component={Refs} />
    </Switch>

  </div>
);

App.propTypes = {
  trackBreadCrumb: func.isRequired
};

export default App;

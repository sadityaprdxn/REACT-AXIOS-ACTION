import React, { useState , useEffect } from 'react';
import '../scss/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Popularmovies from './Popularmovies';
import Moviedetail from './Moviedetail';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Popularmovies />
        </Route>
        <Route path="/:id" exact>
          <Moviedetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

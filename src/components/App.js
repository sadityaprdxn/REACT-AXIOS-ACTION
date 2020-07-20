import React, { useState , useEffect } from 'react';
import '../scss/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Popularmovies from './Popularmovies';

const App = () => {

  return (
    <Popularmovies />
  );
}

export default App;

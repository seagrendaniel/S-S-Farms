import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import HomePage from '../HomePage/HomePage';

import './App.css';

class App extends Component {

  render() {
    return (
        <Switch>
        <Route exact path ='/' render={() =>
        <WelcomePage />
      }/>
      <Route exact path='/home' render={props =>
        <HomePage />
      }/>
      </Switch>
    );
  }
}

export default App;

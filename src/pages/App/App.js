import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';

import './App.css';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() =>
          <WelcomePage />
        } />
        <Route exact path='/home' render={props =>
          <HomePage />
        } />
        <Route exact path='/login' render={props =>
          <LoginPage />
        } />
        <Route exact path='/signup' render={props =>
          <SignupPage />
        } />
      </Switch>
    );
  }
}

export default App;

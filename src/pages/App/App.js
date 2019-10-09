import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import AboutPage from '../AboutPage/AboutPage';
import ShopPage from '../ShopPage/ShopPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() =>
          <WelcomePage />
        } />
        <Route exact path='/home' render={props =>
          <HomePage 
          handleLogout={this.handleLogout}
          user={this.state.user}
          />
        } />
        <Route exact path='/login' render={({ history }) =>
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/signup' render={({ history }) =>
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/about' render={props =>
          <AboutPage />
        } />
        <Route exact path='/shop' render={props =>
          <ShopPage />
        } />
      </Switch>
    );
  }
}

export default App;

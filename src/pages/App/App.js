import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import AboutPage from '../AboutPage/AboutPage';
import ShopPage from '../ShopPage/ShopPage';
import ReviewsPage from '../ReviewsPage/ReviewsPage';
import EditReviewPage from '../EditReviewPage/EditReviewPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import { getCurWeather } from '../../services/weather-api';
import * as reviewAPI from '../../services/reviews-api';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      temp: null,
      icon: null,
      reviews: []
    };
  }

  handleAddReview = async newReviewData => {
    const newReview = await reviewAPI.create(newReviewData);
    this.setState(state => ({
      reviews: [...state.reviews, newReview]
    }), () => this.props.history.push('/reviews'));
  }

  handleUpdateReview = async updateReviewData => {
    const updatedReview = await reviewAPI.update(updateReviewData);
    const newReviewArray = this.state.reviews.map(r => 
      r._id === updatedReview._id ? updatedReview : r
      );
      this.setState(
        {reviews: newReviewArray},
        () => this.props.history.push('/reviews')
      );
  }

  handleDeleteReview = async id => {
    await reviewAPI.deleteOne(id);
    this.setState(state => ({
      reviews: state.reviews.filter(r =>r._id !==id)
    }), () => {
      this.props.history.push('/reviews')}
      );
      console.log('hitting', this.state);
  }


  /*--- Lifecycle Methods ---*/

  async componentDidMount(){
    const weatherData = await getCurWeather()
    const reviewTry = await reviewAPI.getAll();
    console.log('hitting');
    this.setState({
      temp: Math.round(weatherData.main.temp),
      icon: weatherData.weather[0].icon,
      reviews: reviewTry
    });
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
            temp={this.state.temp}
            icon={this.state.icon}
          />
        } />
        <Route exact path='/login' render={({ history }) =>
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            temp={this.state.temp}
            icon={this.state.icon}
          />
        } />
        <Route exact path='/signup' render={({ history }) =>
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            temp={this.state.temp}
            icon={this.state.icon}
          />
        } />
        <Route exact path='/about' render={props =>
          <AboutPage
            handleLogout={this.handleLogout}
            user={this.state.user}
            temp={this.state.temp}
            icon={this.state.icon}
          />
        } />
        <Route exact path='/shop' render={props =>
          <ShopPage
            handleLogout={this.handleLogout}
            user={this.state.user}
            temp={this.state.temp}
            icon={this.state.icon}
          />
        } />
        <Route exact path='/reviews' render={({history, location}) =>
          <ReviewsPage
            handleLogout={this.handleLogout}
            user={this.state.user}
            temp={this.state.temp}
            icon={this.state.icon}
            reviews={this.state.reviews}
            handleAddReview={this.handleAddReview}
            handleUpdateReview={this.handleUpdateReview}
            handleDeleteReview={this.handleDeleteReview}
            location={location}
            history={history}
            />
      } />
        <Route exact path='/reviews/edit' render={({history, location}) =>
        <EditReviewPage 
        handleLogout={this.handleLogout}
        user={this.state.user}
        temp={this.state.temp}
        icon={this.state.icon}
        reviews={this.state.reviews}
        handleUpdateReview={this.handleUpdateReview}
        location={location}
        history={history}
        />
      } />
      </Switch>
    );
  }
}

export default App;

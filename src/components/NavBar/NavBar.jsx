import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <>
      <div className="navbar">
        <div className="left-header">
          <Link to='/home' className="home-btn"><h3>S & S Farms</h3></Link>
          <h4 className="slogan">Home of Zelda's Farm Goods</h4>
        </div>
        <div className="nav-items navbar-text">
          <div className="temp">{props.temp}&deg;</div>
          {props.icon &&
            <img
              src={`https://openweathermap.org/img/w/${props.icon}.png`}
              alt='Current Conditions'
              className='temp-icon'
            />
          }
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className='nav-btn'>WELCOME, {props.user.name}!</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/shop' className="nav-btn">Shop</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/visit' className="nav-btn">Visit</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
             <Link to='/about' className="nav-btn">About</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/reviews' className="nav-btn">Reviews</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/home' className='nav-btn' onClick={props.handleLogout}>LOG OUT</Link>
        </div>
      </div>
    </>
    :
    <>
      <div className="navbar">
        <div className="left-header">
          <Link to='/home' className="home-btn"><h3>S & S Farms</h3></Link>
          <h4 className="slogan">Home of Zelda's Farm Goods</h4>
        </div>
        <div className="nav-items">
          <div className="temp">{props.temp}&deg;</div>
          {props.icon &&
            <img
              src={`https://openweathermap.org/img/w/${props.icon}.png`}
              alt='Current Conditions'
              className='temp-icon'
            />
          }
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/shop' className="nav-btn">Shop</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/visit' className="nav-btn">Visit</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
             <Link to='/about' className="nav-btn">About</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/login' className="nav-btn">Log In</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/signup' className="nav-btn">Sign Up</Link>
        </div>
      </div>
    </>

  return (
    <nav className="login navbar navbar-expand-lg fixed-top">
      {nav}
    </nav>
  );
};

export default NavBar;
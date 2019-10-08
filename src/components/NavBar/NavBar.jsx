import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className="login navbar navbar-expand-lg">
            <div className="left-header">
            <Link to='/home' className="home-btn"><h3>S & S Farms</h3></Link>
            <h4 className="slogan">Home of Zelda's Farm Goods</h4>
            </div>
            <div className="nav-items">
                <Link to='/shop' className="nav-btn">Shop</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to='/about' className="nav-btn">About</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to='/login' className="nav-btn">Log In</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to='/signup' className="nav-btn">Sign Up</Link>
            </div>
        </nav>
    );
};

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

import './WelcomePage.css'

const WelcomePage = (props) => {
    return (
            <div className="bg">
                <h1 className="welcome-header">
                    Welcome to S & S Farms
                </h1>
                    <Link to='/home'><button className='welcome-btn'>Enter</button></Link>
            </div>
    )
}

export default WelcomePage;
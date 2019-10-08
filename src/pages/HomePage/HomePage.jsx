import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

import './HomePage.css'

const HomePage = (props) => {
    return(
        <div>
            <NavBar />
            <div className="homepage">
            <h1 className="home-header fade-in">WELCOME TO S & S FARMS</h1>
            <div className="container-fluid intro">
            <img src="https://i.imgur.com/uNvJrII.jpg" alt="fall colors" className="fall-field"/>
            <p className="container ">
            Oregon's beautiful Willamette Valley is home to S&S Farms, an organic farm that produces marionberries, raspberries, blueberries, grapes, figs and blackberries. 
            The Farm offers Zelda’s Hideaway, a cozy overnight spot that is a perfect location for visiting wine country, Portland, or the Oregon Coast. 
            </p>
            </div>
            </div>
        </div>
    )
}

export default HomePage;
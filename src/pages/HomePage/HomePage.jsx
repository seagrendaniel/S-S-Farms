import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

import './HomePage.css'

const HomePage = (props) => {
    return (
        <div>
            <div className="nav-bar"><NavBar /></div>
            <div className="homepage fade-in">
                <h1 className="home-header">WELCOME TO S & S FARMS</h1>
                <div className="fluid-container intro">
                    <div className="row">
                        <div className="col-sm">

                        </div>
                        <p className="col-sm intro-text">
                            Oregon's beautiful Willamette Valley is home to S&S Farms, an organic farm that produces marionberries, raspberries, blueberries, grapes, figs and blackberries.
                            The Farm offers Zelda’s Hideaway, a cozy overnight spot that is a perfect location for visiting wine country, Portland, or the Oregon Coast.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
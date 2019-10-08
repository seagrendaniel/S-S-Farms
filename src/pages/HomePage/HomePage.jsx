import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';


const HomePage = (props) => {
    return(
        <div>
            <NavBar />
            <h1 className="">WELCOME TO S & S FARMS</h1>
            <p>
            S&S Farm is located in the heart of the Willamette Valley. 
            The Farm offers Zelda’s Hideaway, a cozy overnight spot that is a perfect location for visiting wine country, Portland, or the Oregon Coast. 
            </p>
        </div>
    )
}

export default HomePage;
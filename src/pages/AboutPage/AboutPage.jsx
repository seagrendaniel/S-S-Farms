import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './AboutPage.css';


const AboutPage = (props) => {
    return (
        <div>
            <NavBar />
            <h1 className="about-header fade-in">About S & S Farms</h1>
            <div className="about-content">
            <img src="https://i.imgur.com/ri62OY7.jpg" alt="Zeldas-logo" className="zelda-logo"/>
            <p>
                In 2016 Lou Savage and Cheryl Seagren returned to Oregon from North Africa with Zelda, their Pembrooke Corgi, to establish S&S Farms. 
                They wanted to have a place where they could explore their love of the outdoors, grow their own food and living in the heart of Pinot country wasn't a bad perk. 
                Over time they realized they wanted to share the fruits of their labors with others, and thus, <strong>Zelda's</strong> was born. 
                Zelda's all natural berry jams, preserves, and fruit sauces are made from marionberries, raspberries, blueberries, grapes, figs, and blackberries grown in 
                some of the richest soil in the world. 
                <br></br>
                <br></br>
                Zelda is the guardian of S&S Farms and watches over the goats, chickens, pigs, and cows that share the farm with her.
                They are committed to sustainable farming, concentrating on growing organic berries, grapes, figs, apples, and pears for Zelda’s products.
            </p>
            </div>
        </div>
    )
}

export default AboutPage;
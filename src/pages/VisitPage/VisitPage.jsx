import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

import './VisitPage.css';

const VisitPage = (props) => {
    return (
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
                temp={props.temp}
                icon={props.icon}
            />
            <div className="fade-in">
                <h1 className="visit-header"> Visit Zelda's Retreat</h1>
                <p className="visit-info">
                    Zelda's Retreat is a large private, self-contained suite attached attached to the main farmhouse. It overlooks the surrounding fields and farms and is close to over 100 wineries. The space offers a private entrance, use of a lovely patio, and parking. The suite is decorated in the traditional farmhouse style and features family antiques. Coffee and a delicious light breakfast accompanied by Zelda's jam is offered as well. 
                </p>
            </div>
        </div>
    )
}

export default VisitPage;

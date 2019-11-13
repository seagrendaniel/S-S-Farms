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
                    Zelda's retreat features a queen size bed.
                </p>
            </div>
        </div>
    )
}

export default VisitPage;

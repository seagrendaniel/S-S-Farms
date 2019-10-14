import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

import './ShopPage.css';

const ShopPage = (props) => {
    return (
        <div className="fade-in">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
                temp={props.temp}
                icon={props.icon}
            />
            <div className="shop-body container-fluid">
            <h1>Shop Zelda's Products</h1>
            <div className="row">
            <div className="item col"> 
            Marionberry Jam
            </div>
            <div className="item col">
             Plum Jam
             </div>
            <div className="item col"> 
            Blackberry Jam
            </div>
            </div>
            <div className="row">
            <div className="item col"> 
            Fig Preserves & Marmalade
            </div>
            <div className="item col"> 
            Concord Grape Jam
            </div>
            <div className="item col"> 
            Apple Sauce
            </div>
            </div>
            <div className="row">
            <div className="item col"> 
            Pear Sauce 
            </div>
            <div className="item col"> 
            Berry Chocolate Topping 
            </div>
            </div>
            
            </div>
        </div>
    );
};

export default ShopPage;
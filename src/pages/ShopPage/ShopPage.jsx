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
            <img src="https://i.imgur.com/E4l5EN8.jpg" alt="marionberry-jam" className="item-img"/>
            </div>
            <div className="item col">
             Plum Jam
            <img src="https://i.imgur.com/v0Yg0Ak.jpg" alt="plum-jam" className="item-img"/>
             </div>
            <div className="item col"> 
            Blackberry Jam
            <img src="https://i.imgur.com/LfW3wH2.jpg" alt="blackberry-jam" className="item-img"/>
            </div>
            </div>
            <br/><br/>
            <div className="row">
            <div className="item col"> 
            Fig Preserves & Marmalade
            <img src="https://i.imgur.com/q7WnJGb.jpg" alt="fresh-fig" className="item-img"/>
            </div>
            <div className="item col"> 
            Concord Grape Jam
            <img src="https://i.imgur.com/ZGVFcR1.jpg" alt="grapes" className="item-img"/>
            </div>
            <div className="item col"> 
            Apple Sauce
            <img src="https://i.imgur.com/Q1LwvyL.jpg" alt="apple-sauce" className="item-img"/>
            </div>
            </div>
            <br/><br/>
            <div className="row">
            <div className="item col"> 
            Pear Sauce 
            <img src="" alt="" className="item-img"/>
            </div>
            <div className="item col"> 
            Berry Chocolate Topping 
            <img src="https://i.imgur.com/7YY0SmJ.jpg" alt="blackberries" className="item-img"/>
            </div>
            </div>
            
            </div>
        </div>
    );
};

export default ShopPage;
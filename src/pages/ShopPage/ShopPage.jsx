import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

import './ShopPage.css';

const ShopPage = (props) => {
    return (
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
                temp={props.temp}
                icon={props.icon}
            />
            <h1>Shop Zelda's Products</h1>
        </div>
    );
};

export default ShopPage;
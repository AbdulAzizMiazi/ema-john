import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt=""/>
            </div>
            <nav>
                <a href="/shope">Shope</a>
                <a href="/order">Order Review</a>
                <a href="/manage-inventory">Manage Inventory Here</a>
            </nav>
        </div>
        
    );
};

export default Header;
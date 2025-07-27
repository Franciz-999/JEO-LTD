import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Beverage Distribution</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
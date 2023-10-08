// /src/components/Header.js

import React from 'react';
import { FaPlane, FaGlobe, FaBell, FaUser } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
        <div className="header-logo">
            <FaPlane className="plane-icon" />
            <span className="logo-text">E-flight</span>
        </div>
        <div className="header-center-space"></div>
        <div className="header-currency">
            <span className="currency-text">USD</span>
            <FaGlobe className="globe-icon" />
            <FaBell className="bell-icon" />
            <FaUser className="avatar-icon" />
        </div>
        </header>
    );
};

export default Header;

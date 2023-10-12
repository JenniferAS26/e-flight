import React from 'react'
import logo from '../../assets/icons/logo.svg'; // Importa el logo SVG
import globeIcon from '../../assets/icons/location.svg'; // Importa el icono de ubicación
import bellIcon from '../../assets/icons/notifications.svg'; // Importa el icono de notificaciones
import avatarIcon from '../../assets/images/Rectangle.png'; // Importa la imagen de avatar
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo" className="plane-icon" />
                <span className="logo-text">E-flight</span>
            </div>
            <div className="header-center-space"></div>
            <div className="header-currency">
                <span className="currency-text">USD</span>
                <img src={globeIcon} alt="Globe" className="globe-icon" />
                <img src={bellIcon} alt="Bell" className="bell-icon" />
                <img src={avatarIcon} alt="Avatar" className="avatar-icon" /> {/* Utiliza la variable "avatarIcon" para mostrar la imagen */}
            </div>
        </header>
    );
};

export default Header;

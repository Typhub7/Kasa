import React from 'react';
import logo from "../../assets/LOGO-L.png";
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header className='header'>           
            <div className="logo_container">
                <img className='logo' src={logo} alt="Logo de Kasa" />
            </div>
            <Navigation className='navigation' />          
        </header>
    );
};

export default Header;
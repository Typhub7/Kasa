import React from 'react';
import logo from "../../assets/LOGO-L.png";
import Navigation from '../Navigation/Navigation';

/**Composant d'en-tête affichant le logo de Kasa et la navigation.
 * 
 * @returns {JSX.Element} Le composant d'en-tête.
 */
const Header = () => {
    return (
        <header className='header'>           
            <div className="logo_container">
                <img className='logo' src={logo} alt="Logo de Kasa" />
            </div>
            {/* Composant de navigation */}
            <Navigation className='navigation' />          
        </header>
    );
};

export default Header;
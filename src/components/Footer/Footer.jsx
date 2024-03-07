import React from 'react';
import logo from "../../assets/LOGO-white.png";

/** Composant de footer-pied de page affichant le logo et le droit d'auteur de Kasa.
 * 
 * @returns {JSX.Element} Le composant de pied de page.
 */
const Footer = () => {
    return (
        <footer className="footer_container">
			<img src={logo} alt="logo blanc de kasa" className='logo'/>
			<p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
		</footer>
    );
};

export default Footer;
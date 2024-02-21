import React from 'react';
import logo from "../../assets/LOGO-white.png";

const Footer = () => {
    return (
        <footer className="footer-container">
			<img src={logo} alt="logo blanc de kasa" className='logo'/>
			<p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
		</footer>
    );
};

export default Footer;
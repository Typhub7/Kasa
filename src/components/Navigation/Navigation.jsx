import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to='/accueil' className={({ isActive }) => isActive ? 'link-accueil active-link' : 'link-accueil'}>
                Accueil
            </NavLink>
            <NavLink to='/apropos' className={({ isActive }) => isActive ? 'link-apropos active-link' : 'link-apropos'}>
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;
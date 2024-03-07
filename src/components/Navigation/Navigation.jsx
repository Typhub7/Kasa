import React from 'react';
import { NavLink } from 'react-router-dom';

/** Composant de navigation affichant des liens du menu vers différentes pages.
 * 
 * @returns {JSX.Element} Le composant de navigation.
 */
const Navigation = () => {
    return (
        <div className='navigation'>
            {/* Lien vers la page d'accueil */}
            <NavLink to='/accueil' className={({ isActive }) => isActive ? 'link-accueil active-link' : 'link-accueil'}>
                Accueil
            </NavLink>
            {/* Lien vers la page À propos */}
            <NavLink to='/apropos' className={({ isActive }) => isActive ? 'link-apropos active-link' : 'link-apropos'}>
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/accueil'className='link-accueil'>
                    <li>accueil</li>
                </NavLink>
                <NavLink to='/apropos' className='link-apropos'>
                    <li>A propos</li>
                </NavLink>
            </ul>

            
        </div>
    );
};

export default Navigation;
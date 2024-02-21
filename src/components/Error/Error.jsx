import React from 'react'
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className='error'>
            <h1 className='error-number'>404</h1>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/accueil">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error;
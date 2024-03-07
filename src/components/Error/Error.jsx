import React from 'react'
import { Link } from "react-router-dom"

/** Composant d'erreur affichant une erreur 404 et un lien de retour à la page d'accueil.
 * 
 * @returns {JSX.Element} Le composant d'erreur.
 */
const Error = () => {
    return (
        <div className='error'>
            <h1 className='error_number'>404</h1>
            <p className='error_text'>Oups! La page que vous demandez n'existe pas.</p>
             {/* Lien vers la page d'accueil */}
            <Link to="/accueil"className='error-link active-link'>Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error;
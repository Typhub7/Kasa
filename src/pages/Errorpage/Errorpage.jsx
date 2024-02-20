import React from 'react';
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p> <Link to="/accueil">Retourner sur la page d'accueil</Link></p>

    </div>
  );
};

export default ErrorPage;



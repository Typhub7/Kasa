import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Error from '../../components/Error/Error';

/** Page d'erreur affichant un message d'erreur.
 * 
 * @returns {JSX.Element} Le composant de la page d'erreur.
 */
const ErrorPage = () => {
  return (
    <div id="error-page">
      <Header />
      <Error />
      <Footer />
    </div>
  );
};

export default ErrorPage;



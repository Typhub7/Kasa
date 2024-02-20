import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Accueil from '../pages/Accueil/Accueil';
import Apropos from '../pages/Apropos/Apropos';
import Logement from '../pages/Logement/Logement';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

function routes() {
    const router = createBrowserRouter([
        { path: "/", element: <div>Hello world!</div>, errorElement: <ErrorPage />},
        { path: "/accueil", element: <Accueil />, errorElement: <ErrorPage />},
        { path: "/apropos", element: <Apropos />, errorElement: <ErrorPage />},
        { path: "/logement", element: <Logement />, errorElement: <ErrorPage />},
        { path: "*", element: <ErrorPage />} // En cas de saisie erronée de l'adresse on bascule sur la page d'erreur    
      ])
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      );
}

export default routes;

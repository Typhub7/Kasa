import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import image from "../../assets/Background-img-accueil.png";
import MultiCards from '../../components/MultiCards/MultiCards';


/** Page d'accueil affichant le contenu principal du site.
 * 
 * @returns {JSX.Element} Le composant de la page d'accueil.
 */
const Accueil = () => {
    return (
        <div className='accueil_container'>
            <Header />
            <Banner
                title="Chez vous, partout et ailleurs"
                image={image}
                className="banner_container"
            />
            <MultiCards/>
            
            <Footer />
        </div>
    );
};

export default Accueil;
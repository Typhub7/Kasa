import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import image from "../../assets/Background-img-accueil.png";

const Accueil = () => {
    return (
        <div>
            <Header />
            <Banner
                title="Chez vous, partout et ailleurs"
                image={image}
                className="banner_container"
            />
            <Footer />
        </div>
    );
};

export default Accueil;
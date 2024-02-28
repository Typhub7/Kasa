import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carrousel from '../../components/Carrousel/Carrousel';
import logements from '../../mock/logements.json';


const Logement = () => {
    return (
        <div>            
            <Header />
            <div>
                {logements.map((logement, index) => (
                    <div key={index}>
                        <h2>{logement.title}</h2>
                        <Carrousel pictures={logement.pictures} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};


export default Logement;
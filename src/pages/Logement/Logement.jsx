import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carrousel from '../../components/Carrousel/Carrousel';
import { useParams } from 'react-router-dom';
import logements from '../../mock/logements.json';
import Collapse from '../../components/Collapse/Collapse';


const Logement = () => {
    const { id } = useParams()
    const logement = logements.find(item => item.id === id)

    if (!logement) {
        return (
            <><Header /><div>Logement non trouvé</div><Footer /></>)
    }

    return (
        <div>            
            <Header />
            <div className='logeinfo_container'>
                <Carrousel pictures={logement.pictures} />
                <h2>{logement.title}</h2>
                <h3>{logement.location}</h3>
                <div className='collapsemenu_container'>
                    <Collapse
                    title="Description"
                    contain={logement.description}
                    className="description_container"
                    />
                    <Collapse 
                    title="Equipements"
                    contain={logement.equipments}
                    className="equipements_container"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default Logement;
import React , { useEffect }  from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carrousel from '../../components/Carrousel/Carrousel';
import { useNavigate, useParams } from 'react-router-dom';
import logements from '../../mock/logements.json';
import Collapse from '../../components/Collapse/Collapse';
import Tag from '../../components/Tag/Tag';
import Stars from '../../components/Stars/Stars';
import Contact from '../../components/Contact/Contact';

/** Page affichant les détails d'un logement.
 * 
 * @returns {JSX.Element} Le composant de la page de détails du logement.
 */
const Logement = () => {
    const { id } = useParams()
    const logement = logements.find(item => item.id === id)
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifie si le logement existe, sinon redirige vers la page d'erreur
        if (!logement) {
            navigate('/erreur404');
        }
    }, [logement, navigate]);

    return (
        <div>            
            <Header />
            <div className='logeinfo_container'>
                <div className='carrousel_contain'>
                    <Carrousel pictures={logement.pictures} />
                </div>
                <div className='logement_info'>
                    <div className='titlesAndTag'>
                        <h3>{logement.title}</h3>
                        <h2>{logement.location}</h2>
                        <div className="tags_container">
                            {logement.tags.map(tag => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>               
                    <div className='contactAndStars'>
                        <Contact host={logement.host}/>
                        <div className='stars_container'>
                            <Stars rating={logement.rating} />
                        </div>
                    </div>
                </div>
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
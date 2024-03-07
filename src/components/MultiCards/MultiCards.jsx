import React from 'react';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import logements from '../../mock/logements.json';


/** Composant affichant une liste de cartes de logements avec des liens vers les pages de détails du logement choisi.
 * 
 * @returns {JSX.Element} Le composant de liste de cartes.
 */
const MultiCards = () => {   
    return (
        <div className='cards'>
            {/* Mapper à travers la liste des logements et afficher une carte pour chaque logement */}
            {logements.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id}>
                    <Card
                        key={logement.id}
                        image={logement.cover}
                        title={logement.title}
                    />
                </Link>
            ))}
        </div>
    );
};

export default MultiCards;
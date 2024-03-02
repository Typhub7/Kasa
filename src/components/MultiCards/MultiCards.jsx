import React from 'react';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import logements from '../../mock/logements.json';

const MultiCards = () => {   
   
    return (
        <div className='cards'>
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
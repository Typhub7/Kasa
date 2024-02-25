import React from 'react';
import Card from '../../components/Card/Card';
import logements from '../../mock/logements.json';


const MultiCards = () => {
    return (
        <div className='cards'>
            {logements.map((logement, index) => (
                <Card
                    key={index}
                    image={logement.cover}
                    title={logement.title}
                />
            ))}
        </div>
    );
};

export default MultiCards;
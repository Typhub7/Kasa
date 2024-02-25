import React from 'react';
import Card from '../../components/Card/Card';
import logements from '../src/mock/logements.json';


const MultiCards = ({cover, title}) => {
    return (
        <div className='cards'>
            <Card
                image={cover}
                title={title}
                />
            <Card
                image={cover}
                title={title}
            />
            <Card
                image={cover}
                title={title}
                />
            <Card
                image={cover}
                title={title}
            />
            <Card
                image={cover}
                title={title}
                />
            <Card
                image={cover}
                title={title}
            />
        </div>
    );
};

export default MultiCards;
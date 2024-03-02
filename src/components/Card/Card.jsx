import React from 'react';

const Card = ({ image, title}) => {
    return (
        <div className='card_container'>
            <img className='card_image' src={image} alt="" />
            <h3 className='card_title'>{title}</h3>     
        </div>
    );
};

export default Card;
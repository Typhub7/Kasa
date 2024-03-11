import React from 'react';

/** Composant de carte affichant l'image et le titre du logement.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.image - L'URL de l'image de la carte.
 * @param {string} props.title - Le titre de la carte.
 * @returns {JSX.Element} Le composant de carte.
 */

const Card = ({ image, title}) => {
    return (
        <div className='card_container'>
            <img className='card_image' src={image} alt="" />
            <h3 className='card_title'>{title}</h3>
        </div>
    );
};

export default Card;
import React from 'react';

/** Composant de bannière affichant un titre et un fond au format image.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre de la bannière.
 * @param {string} props.image - L'URL de l'image de la bannière.
 * @returns {JSX.Element} Le composant de bannière.
 */

const Banner = ({ title, image }) => {
    return (
        <div className="banner_container">
			<img className="banner_img" src={image} alt="" />
            <h1 className="banner_text">{title}</h1>
            <h1 className="text-outline">{title}</h1>
        </div>
    );
};

export default Banner;
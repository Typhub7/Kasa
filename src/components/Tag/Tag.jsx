import React from 'react';

/** Composant d'affichage du tag d'un critère important pour le logement.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.tag - Le texte du tag à afficher.
 * @returns {JSX.Element} Le composant du tag.
 */

const Tag = (tags) => {
    return (
        <div className="tag_container">
			<span className="tag_text">{tags.tag}</span>
		</div>
    );
};

export default Tag;
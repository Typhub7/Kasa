import React from 'react';
import starInactive from "../../assets/star-inactive.png";
import starActive from "../../assets/star-active.png";

/** Composant d'affichage d'étoiles représentant une notation.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.rating - La notation à afficher.
 * @returns {JSX.Element} Le composant d'étoiles.
 */
const Stars = ({rating}) => {
    /** Renvoi les étoiles en fonction de la notation.
     * 
     * @returns {JSX.Element[]} Un tableau d'éléments JSX représentant les étoiles.
     */
    const renderStars = () => {
        // Crée un tableau d'étoiles en fonction de la notation
        const starsRating = [...Array(5)].map((_, index) => (
            <img
            key={index}
            src={index < rating ? starActive : starInactive}
            alt={index < rating ? "étoile colorée" : "étoile grisée"}
            className="star"
          />
        ));
    return starsRating;
  };
    return (
        <div>
            {/* Affiche les étoiles rendues en fonction de la notation */}
            {renderStars()}
        </div>
    );
};

export default Stars;
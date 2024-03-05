import React from 'react';
import starInactive from "../../assets/star-inactive.png";
import starActive from "../../assets/star-active.png";

const Stars = ({rating}) => {
    const renderStars = () => {
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
            {renderStars()}
        </div>
    );
};

export default Stars;
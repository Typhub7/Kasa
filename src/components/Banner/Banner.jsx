import React from 'react';
import image from "../../assets/Background-img-accueil.png";


const Banner = () => {
    return (
        <div className="banner_container">
			<img className="banner_img" src={image} alt="" />
            <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
		</div>
    );
};

export default Banner;
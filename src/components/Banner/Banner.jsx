import React from 'react';


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
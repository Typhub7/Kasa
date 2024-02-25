import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import MultiCollapse from '../../components/MultiCollapse/Multicollapse';


import image from "../../assets/Background-img-apropos.png";

const Apropos = () => {
    return (
        <div>
            <Header />
            <Banner
                title=""
                image={image}
                className="banner_container"
            />
            
            <MultiCollapse />
            <Footer />
        </div>
    );
};

export default Apropos;
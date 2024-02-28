import React,{useState} from 'react';
import arrow from '../../assets/arrow_back.png'

const Carrousel = ({pictures}) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((lastImage) => (lastImage === pictures.length - 1 ? 0 : lastImage + 1));
      };
    
      const previousImage = () => {
        setCurrentImage((lastImage) => (lastImage === 0 ? pictures.length - 1 : lastImage - 1));
      };
    return (
        <div className='carrousel-entier'>
            <img
            className={'arrow arrow_left'}
            src={arrow}
            alt="chevron pour deplier le texte"
            onClick={previousImage}
            />
            <div className="slide-container">
                {pictures.map((picture, index) => (
                    <div key={index} className={index === currentImage ? 'slide active' : 'slide'}>
                        <img src={picture} alt={`${index + 1} vue du logement`} />
                    </div>
                ))}
            </div>
            <img
            className={'arrow arrow_right'}
            src={arrow}
            alt="chevron pour deplier le texte"
            onClick={nextImage}
            />

        </div>
    );
};

export default Carrousel;
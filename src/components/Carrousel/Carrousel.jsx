import React,{useState} from 'react';
import arrow from '../../assets/arrow_left.png'

/**Composant de carrousel affichant une série d'images avec des flèches de navigation.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.pictures - Les URLs des images à afficher dans le carrousel.
 * @returns {JSX.Element} Le composant de carrousel.
 */

const Carrousel = ({pictures}) => {
    const [currentImage, setCurrentImage] = useState(0);

    // Affiche l'image suivante dans le carrousel.
    const nextImage = () => {
        setCurrentImage((lastImage) => (lastImage === pictures.length - 1 ? 0 : lastImage + 1));
    };
    
    // Affiche l'image précédente dans le carrousel.
    const previousImage = () => {
        setCurrentImage((lastImage) => (lastImage === 0 ? pictures.length - 1 : lastImage - 1));
    };

    // Vérifie s'il y a plus d'une image à afficher pour décider d'afficher les flèches et le compteur de pages
      const showArrowsAndCounter = pictures.length > 1
    return (
        <div className='carrousel_fullcontainer'>
            <div className="slide-container">
                {pictures.map((picture, index) => (
                    <div key={index} className={index === currentImage ? 'slide active' : 'slide'}>
                        <img src={picture} alt={`${index + 1} vue du logement`} />
                        {showArrowsAndCounter &&<p className='page_number'>{index + 1}/{pictures.length}</p>}
                    </div>
                ))}
            </div>
            {showArrowsAndCounter &&
                <>
                    <img
                    className={'arrow arrow_left'}
                    src={arrow}
                    alt="chevron pour deplier le texte"
                    onClick={previousImage}
                    />
                    <img
                    className={'arrow arrow_right'}
                    src={arrow}
                    alt="chevron pour deplier le texte"
                    onClick={nextImage}
                    />
                </>
            }
        </div>
    );
};

export default Carrousel;
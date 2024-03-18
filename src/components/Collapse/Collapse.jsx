import { useState } from "react";
import arrow from '../../assets/arrow_back.png'

/** Composant de collapse affichant un titre et un contenu pouvant être réduit ou développé.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre du collapsible.
 * @param {string|Object} props.contain - Le contenu du collapsible. Peut être soit une chaîne de caractères, soit un objet.
 * @param {string} [props.className] - La classe CSS supplémentaire à appliquer au collapsible.
 * @returns {JSX.Element} Le composant de collapse.
 */

const Collapse = ({title,contain, className}) => {
    const [open, setOpen] = useState(false);

    /*Bascule l'état d'ouverture du collapsible entre ouvert et fermé*/
    const toggleCollapse = () => {
        setOpen(!open)
    } 
  return (
    <div className={`collapse_container ${className} ${open ? 'ouvert' : ''}`}>
      <button onClick={toggleCollapse} className="collapse_button">
        <p className="collapse_title">{title}</p>
        {/* Affiche une flèche vers le bas si le collapsible est ouvert, sinon une flèche vers le haut */}
        <img
          className={!open ? 'arrow' : 'arrow arrow_down'}
          src={arrow}
          alt="chevron pour deplier le texte"
        />
      </button>
      {/* Affiche le contenu si le collapsible est ouvert */}
      <h4 className={`text_info ${open ? 'deplie' : ''} `}>
        {/* Si le contenu est un objet, affiche une liste d'éléments, sinon affiche simplement le contenu */}
        {typeof contain === 'object' ? (
          <ul>
            {Object.keys(contain).map((key, index) => (
              <li key={index}>
                {contain[key]}
              </li>
            ))}
          </ul>
          ) : (
          <p>{contain}</p>
        )}
      </h4>  
    </div>
  );
}

export default Collapse;

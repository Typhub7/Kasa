import { useState } from "react";
import arrow from '../../assets/arrow_back.png'

const Collapse = ({title,contain, className}) => {
    const [open, setOpen] = useState(false);
    const toggleCollapse = () => {
        setOpen(!open)
    } 
  return (
    <div className={`collapse_container ${className}`}>
      <button onClick={toggleCollapse} className="collapse_button">
        <p className="collapse_title">{title}</p>
        <img
          className={!open ? 'arrow' : 'arrow arrow_down'}
          src={arrow}
          alt="chevron pour deplier le texte"
        />
      </button>
      {open && (
        <h4 className="text_info">
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
        )}</h4> 
      )}
    </div>
  );
}

export default Collapse;

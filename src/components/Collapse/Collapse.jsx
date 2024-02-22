import { useState } from "react";
import arrow from '../../assets/arrow_back.png'

const Collapse = ({title,contain, className}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    } 
  return (
    <div className="collapse_container">
      <button onClick={toggle} className="collapse_button">
        <p className="collapse_title">{title}</p>
        <img
          className={!open ? 'arrow' : 'arrow arrow_down'}
          src={arrow}
          alt="chevron pour deplier le texte"
        />
      </button>
      {open && (
        <div className={className}>
          <h4>{contain}</h4>
        </div>
      )}
    </div>
  );
}

export default Collapse;

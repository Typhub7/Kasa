import React from 'react';
import Collapse from '../Collapse/Collapse';
import collapsesData from '../../data/collapsesData';

/** Composant affichant une liste de collapsibles.
 * 
 * @returns {JSX.Element} Le composant de liste de collapsibles.
 */
const MultiCollapse = () => {
  return (
    <div className='multicollapse_container'>
      {/* Mapper à travers la liste de données de collapsibles et afficher un collapsible pour chaque élément */}
      {collapsesData.map((collapse, index) => (
        <Collapse
          key={index} 
          title={collapse.title}
          contain={collapse.contain}
          className={collapse.className}
        />
      ))}
    </div>
  );
};

export default MultiCollapse;
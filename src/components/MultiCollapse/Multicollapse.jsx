import React from 'react';
import Collapse from '../Collapse/Collapse';

const MultiCollapse = () => {
  const collapsesData = [
    {   title: 'Fiabilité',
        contain:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        className:"fiabilite_container"},
    {   title: 'Respect',
        contain:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        className: "respect_container"
    },
    {   title: 'Service',
        contain:
        "Nous sommes joignables 24/24h et 7j/7 par email et chaque jour telephone de 6h à 22h au 01.02.03.04.05. N'hesitez pas à nous contacter.",
        className: "service_container"    
    },
    {   title: 'Sécurité',
        contain:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        className: "securite_container"    
    },
    ];

  return (
    <div className='multicollapse_container'>
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
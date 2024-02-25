import React from 'react';
import Collapse from '../Collapse/Collapse';
import collapsesData from '../../data/collapsesData';


const MultiCollapse = () => {
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
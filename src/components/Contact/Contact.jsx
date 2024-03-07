import React from 'react';

const Contact = ({host}) => {
    return (
        <div className='host_container'>
            <div className='host_name'>
                <p>{host.name}</p>
            </div>
            <div className='host_picture'>
                <img src={host.picture} alt={`portrait de ${host.name}`}/>
            </div>         
        </div>
    );
};

export default Contact;
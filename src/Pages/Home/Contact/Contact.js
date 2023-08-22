import React from 'react';
import infoData from '../../../data/infoData';
import ContactInfo from './ContactInfo';

const Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 lg:my-20'>
            {
            infoData.map(info => <ContactInfo info={info}/>)
            }
        </div>
    );
};

export default Contact;
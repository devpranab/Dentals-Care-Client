import React from 'react';

const ContactInfo = ({ info }) => {
    const { title, icon, description, bg } = info;

    return (
        <div className={`${bg} flex items-center px-8 py-10 rounded-lg`}>
            <div>
                <img src={icon} alt="Contact Img" />
            </div>
            <div className='text-white ml-5'>
                <h1 className='text-xl font-bold pb-1'>{title}</h1>
                <p className='font-semibold pt-2'>{description}</p>
            </div>
        </div>
    );
};

export default ContactInfo;
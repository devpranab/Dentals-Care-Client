import React from 'react';

const Service = ({service}) => {
    const { title, description, img } = service;

    return (
        <div className='flex flex-col justify-center items-center shadow-lg rounded-lg p-5'>
            <div>
                <img src={img} alt="Service Area" />
            </div>
            <div className='my-10'>
            <h3 className="text-lg text-center text-neutral font-semibold">{title}</h3>
                <p className="text-center px-10 text-dark text-lg">{description}</p>
            </div>
        </div>
    );
};

export default Service;
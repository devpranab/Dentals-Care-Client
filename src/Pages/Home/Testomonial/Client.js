import React from 'react';

const Client = ({ client }) => {
    const { name, quote, from, img } = client;

    return (
        <div className='flex flex-col justify-center px-8 shadow-xl rounded-lg'>
            <div>
            <p className="text-black text-lg">{quote}</p>
            </div>
            <div className='my-9 flex items-center'>
                <div className='rounded-full w-16 ring ring-primary ring-offset-base-100 ring-offset-2'>
                    <img src={img} alt="Client" />
                </div>
                <div className='ml-4'>
                <h2 className="text-lg font-bold text-dark">{name}</h2>
                    <p className="text-black">{from}</p>
                </div>
            </div>
        </div>
    );
};

export default Client;
import React, {useContext} from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Client = ({ client }) => {
    const { name, quote, from, img } = client;
    const { isDarkMode } = useContext(AuthContext);

    return (
        <div className='flex flex-col justify-center px-8 shadow-xl rounded-lg'>
            <div>
            <p className={`${isDarkMode ? "text-white" : "text-black"}`}>{quote}</p>
            </div>
            <div className='my-9 flex items-center'>
                <div className='rounded-full w-16 ring ring-primary ring-offset-base-100 ring-offset-2'>
                    <img src={img} alt="Client" />
                </div>
                <div className='ml-4'>
                <h2 className="text-lg font-bold text-dark">{name}</h2>
                <p className={`${isDarkMode ? "text-white" : "text-black"}`}>{from}</p>
                </div>
            </div>
        </div>
    );
};

export default Client;
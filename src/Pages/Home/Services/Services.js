import React, {useContext} from 'react';
import Service from './Service';
import servicesData from '../../../data/servicesData';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Services = () => {
    const { isDarkMode } = useContext(AuthContext);

    return (
        <div className='my-20'>
            <div className='text-center'>
                <h3 className='uppercase text-primary font-bold text-xl'>Our Services</h3>
                <h1 className={` ${isDarkMode ? "text-white" : "text-black"} text-4xl my-5`}>Services We Provide</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-20'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;
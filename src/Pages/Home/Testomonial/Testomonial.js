import React, {useContext} from 'react';
import Client from './Client';
import quote from '../../../assets/icons/quote.svg';
import testimonialsData from '../../../data/testimonialsData';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Testomonial = () => {
    const { isDarkMode } = useContext(AuthContext);

    return (
        <section className='my-32'>
        <div className='flex justify-between items-center mb-16'>
            <div>
            <p className='text-primary font-bold uppercase'>Testimonial</p>
            <h2 className={`text-4xl ${isDarkMode ? "text-white" : "text-black"}`}>What Our Patients Says</h2>
            </div>
            <div>
                <img src={quote} alt="Testimonial bg" className='w-1/2 ml-auto' />
            </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                testimonialsData.map(client => <Client
                    key={client.id}
                    client={client}
                ></Client>)
            }
        </div>
    </section>
    );
};

export default Testomonial;
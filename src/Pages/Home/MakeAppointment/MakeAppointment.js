import React from 'react';
import'./MakeAppointment.css';
import doctor from '../../../assets/images/doctor.png';
import banner from '../../../assets/images/appointment.png';
import MainButton from '../../../components/MainButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='makeAppointment py-5 mt-20 lg:mt-64 mb-32 bg-no-repeat bg-cover max-w-screen rounded' style={{ backgroundImage: `url(${banner})` }}>
            <div className='appointment-grid grid md:grid-cols-2 pl-5'>
                <div className='lg:flex hidden justify-center items-center'>
                    <img src={doctor} className="appImg ml-12" alt="Doctor" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='py-10'>
                        <p className='text-primary font-semibold text-xl pb-5'>Appointment</p>
                        <h1 className=' text-4xl font-bold text-white text-left'>Make an appointment Today</h1>
                        <p className='py-9 lg:mr-16 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <Link to={'/appointment'}><MainButton>Learn More...</MainButton></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
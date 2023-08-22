import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import SecondBanner from '../SecondBanner/SecondBanner';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testomonial from '../Testomonial/Testomonial';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    document.title = "Home"; //dynamic title
    return (
        <div className='mx-5'>
            <Banner />
            <Contact />
            <Services />
            <SecondBanner />
            <MakeAppointment />
            <Testomonial />
            <ContactUs />
        </div>
    )
};

export default Home;
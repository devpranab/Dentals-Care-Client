import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import { BsWhatsapp } from 'react-icons/bs';

const Whatsapp = () => {
    return (
        <div>
            <ReactWhatsapp number="+919564346654" message="Hello DoctorMyCare!"><BsWhatsapp className="icon" /></ReactWhatsapp>
        </div>
    );
};

export default Whatsapp;
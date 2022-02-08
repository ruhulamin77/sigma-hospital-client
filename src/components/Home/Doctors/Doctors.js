import React from 'react';
import './Doctor.css';
import DoctorsSlider from './DoctorSlide/DoctorsSlider';

const Doctors = () => {
    return (
        <div>
            <div className='doctor-section text-center'>
                <h5 style={{ letterSpacing: "3px" }}>Doctors</h5>
                <h1>Our outstanding doctors <br /> <span className='fw-light'> are active to help you!</span></h1>
                <DoctorsSlider />
            </div>
        </div>
    );
};

export default Doctors;
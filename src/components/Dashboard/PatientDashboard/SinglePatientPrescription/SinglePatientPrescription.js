import React from 'react';
import { HiLocationMarker, HiMail, HiPhoneMissedCall } from "react-icons/hi";

const SinglePatientPrescription = ({ singlePrescriptionData }) => {
    const { patientName, patientAge, patientGender, doctorName } = singlePrescriptionData;
    console.log(doctorName);
    return (
        <div className='p-5'>
            <div className='row'>
                <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
                    <h1 style={{ letterSpacing: "2px" }}>Invoice</h1>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                    <h6>Sigma Care Hospial</h6>
                    <p><HiLocationMarker className='me-2' />1234 North Avenue Luke, South Bend, IN 360001</p>
                    <p><HiPhoneMissedCall className='me-2' />+8801629094984</p>
                    <p><HiMail className='me-2' />support@gmail.com</p>
                </div>
            </div>
            <div style={{ marginTop: "5rem" }} className='row'>
                <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
                    <h6>Build by</h6>
                    <p>{doctorName}</p>
                    <h6 className='mt-2'>Build to</h6>
                    <p>{patientName}</p>
                    <p>Gender: {patientGender}</p>
                    <p>Age: {patientAge}</p>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                    <h6>Invoice number</h6>
                </div>
            </div>
        </div>
    );
};

export default SinglePatientPrescription;
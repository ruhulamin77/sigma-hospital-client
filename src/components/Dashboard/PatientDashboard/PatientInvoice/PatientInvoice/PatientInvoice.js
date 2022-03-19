import React from 'react';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useGetPrescriptionsQuery } from '../../../../../features/sigmaApi';

const PatientInvoice = () => {
    const allPrescription = useGetPrescriptionsQuery();
    console.log(allPrescription.data);
    return (
        <div className="p-3">
            <h3 className='mb-3'>Patient Information</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Patient Id</th>
                        <th>Doctor Name</th>
                        <th>Patient Name</th>
                        <th>Patient Age</th>
                        <th>Patient Gender</th>
                        <th>Patient Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {allPrescription?.data?.map((precData) => (
                        <tr key={precData?._id}>
                            <td>{precData?._id}</td>
                            <td>{precData?.doctorName}</td>
                            <td>{precData?.patientFirstName} {precData?.patientLastName}</td>
                            <td>{precData?.patientAge}</td>
                            <td>{precData?.patientGender}</td>
                            <td><NavLink to={`/dashboard/singlePatient/invoice/${precData?._id}`}>Invoice</NavLink></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default PatientInvoice;
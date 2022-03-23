import React, { useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useGetPrescriptionsQuery } from '../../../../../features/sigmaApi';

const AppointedPatient = () => {
    const nurse = useSelector((state) => state.admin.admin);
    const allNurseData = useGetPrescriptionsQuery();
    const [singleApointData, setSingleApointData] = useState([]);
    console.log(singleApointData);

    useEffect(() => {
        const singleNurseData = allNurseData?.data?.filter(allNurse => (
            allNurse?.nurseData?.filter(singleNurse => singleNurse.email === nurse?.adminEmail)
        ));
        setSingleApointData(singleNurseData);
    }, [allNurseData?.data, nurse?.adminEmail]);

    return (
        <div style={{ backgroundColor: "#F4F7F6", padding: "20px" }}>
            <h3 className='mb-3'>{nurse?.adminName}</h3>
            <h5 className='mb-3'>Patient Data</h5>
            {!singleApointData ? <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button> :
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Patient Name</th>
                            <th>Patient Age</th>
                            <th>Patient Gender</th>
                            <th>Appoint Date</th>
                            <th>Doctor Name</th>
                            <th>Prescription</th>
                        </tr>
                    </thead>
                    <tbody>
                        {singleApointData.map((apointData) => (
                            <tr key={apointData?._id}>
                                <td>{apointData?._id}</td>
                                <td>{apointData?.patientFirstName} {apointData?.patientLastName}</td>
                                <td>{apointData?.patientAge}</td>
                                <td>{apointData?.patientGender}</td>
                                <td>{apointData?.nurseApointDate}</td>
                                <td>{apointData?.doctorName}</td>
                                <td><NavLink to={`/dashboard/singlePatient/invoice/${apointData?._id}`}>Invoice</NavLink></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </div>
    );
};

export default AppointedPatient;
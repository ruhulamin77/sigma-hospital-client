import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PatientTable from '../PatientTable/PatientTable';

const PatientData = () => {
    const doctor = useSelector((state) => state.admin.admin);
    console.log(doctor?.adminEmail);
    const [appointment, setAppoinment] = useState([]);
    console.log(appointment);

    useEffect(() => {
        fetch(`https://shrouded-headland-44423.herokuapp.com/appointments/${doctor?.adminEmail}`)
            .then(res => res.json())
            .then(data => setAppoinment(data))
    }, [doctor?.adminEmail]);
    return (
        <div style={{ backgroundColor: "#F4F7F6", padding: "20px" }}>
            <h3 className='mb-3'>{doctor?.adminName}</h3>
            <h5 className='mb-3'>Patient Data</h5>
            {!appointment.length ? <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button> :
                <Row xs={1} md={3} className="g-4">
                    {appointment.map((appoint) => (
                        <PatientTable
                            key={appoint._id}
                            appoint={appoint}
                        ></PatientTable>
                    ))}
                </Row>}
        </div>
    );
};

export default PatientData;
import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';

const AppointedPatient = () => {
    const nurse = JSON.parse(localStorage.getItem("admin"));
    console.log(nurse?.adminEmail);
    const [appointment, setAppoinment] = useState([]);
    console.log(appointment);

    useEffect(() => {
        fetch(`http://localhost:7050/nurseAppoint/${nurse?.adminEmail}`)
            .then(res => res.json())
            .then(data => setAppoinment(data))
    }, [nurse?.adminEmail]);

    return (
        <div style={{ backgroundColor: "#F4F7F6", padding: "20px" }}>
            <h3 className='mb-3'>{nurse?.adminName}</h3>
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
                    {appointment.map((appointNurse) => (
                        console.log(appointNurse)
                        // <PatientInfo
                        //     key={appointNurse._id}
                        //     appointNurse={appointNurse}
                        // ></PatientInfo>
                    ))}
                </Row>}
        </div>
    );
};

export default AppointedPatient;
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PatientTable = ({ appoint }) => {
    const { _id, Age, date, description, firstName, lastName, mobileNumber, status, gender } = appoint;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <Card.Header>{firstName} {lastName}</Card.Header>
                            <Button className='doctor-update'>{status}</Button>
                        </div>
                        <div className='row  mb-3'>
                            <Card.Text className='col-6'>Age: {Age}</Card.Text>
                            <Card.Text className='col-6'>Gender: {gender}</Card.Text>
                        </div>
                        <div className='row mb-3'>
                            <Card.Text className='col-6'>Contact: {mobileNumber}</Card.Text>
                            <Card.Text className='col-6'>Appointment Date: {date}</Card.Text>
                        </div>
                        <Card.Text className='mb-3'><b>Description:</b> {description}</Card.Text>
                        <NavLink to={`/dashboard/prescription/${_id}`} >
                            <Button className='doctor-delete'>Prescription</Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default PatientTable;
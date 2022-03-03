import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetNursesQuery } from '../../../../features/sigmaApi';
import Swal from 'sweetalert2';

const NurseProfileUpdate = () => {
    const allNurse = useGetNursesQuery();
    const { id } = useParams();
    const [singleNurseInfo, setSingleNurseInfo] = useState([]);
    const [nurseUpdateData, setNurseUpdateData] = useState({});

    useEffect(() => {
        const doctorData = allNurse?.data?.find(doctorId => doctorId._id === id);
        setSingleNurseInfo(doctorData);
    }, [allNurse?.data, id]);
    const handleUpdateNurse = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newDoctorData = { ...nurseUpdateData };
        newDoctorData[field] = value;
        setNurseUpdateData(newDoctorData);
    }
    const handleSubmit = e => {
        e.preventDefault();

        fetch(`http://localhost:7050/updateNurse/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(nurseUpdateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        "Nurse's informatoin has been successfully updated!",
                        'success'
                    )
                }
            })
    }

    return (
        <div style={{ backgroundColor: "#F4F7F6", padding: "20px 0" }}>
            <Container>
                <Card className='card-control2'>
                    <Card.Body>
                        <Card.Text className='mb-3 fs-4'><b>GIVE SOME  BASIC INFORMATION TO ADD A NURSE</b></Card.Text>
                        <Form onSubmit={handleSubmit} className='row'>

                            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        className='text-secondary'
                                        defaultValue={singleNurseInfo?.name}
                                        placeholder="Full Name"
                                        name="name"
                                        type="text"
                                        onBlur={handleUpdateNurse}
                                        required
                                    />
                                </Form.Group>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                className='text-secondary'
                                                defaultValue={singleNurseInfo?.gender}
                                                name="gender"
                                                onBlur={handleUpdateNurse}
                                                required={true}
                                                aria-label="Default select example"
                                            >
                                                <option>Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                className='text-secondary'
                                                defaultValue={singleNurseInfo?.day}
                                                name="day"
                                                onBlur={handleUpdateNurse}
                                                required={true}
                                            >
                                                <option>Working Day</option>
                                                <option value="Monday - Friday">Monday - Friday</option>
                                                <option value="Sunday - Thrusday">Sunday - Thrusday</option>
                                                <option value="Friday - Monday">Friday - Monday</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>

                            </div>

                            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                defaultValue={singleNurseInfo?.email}
                                                placeholder="Enter email address"
                                                name="email"
                                                type="email"
                                                onBlur={handleUpdateNurse}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                defaultValue={singleNurseInfo?.phone}
                                                placeholder="Phone"
                                                name="phone"
                                                type="number"
                                                onBlur={handleUpdateNurse}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                className='text-secondary'
                                                defaultValue={singleNurseInfo?.time}
                                                name="time"
                                                onBlur={handleUpdateNurse}
                                                required={true}
                                            >
                                                <option>Working Time</option>
                                                <option value="7.00 am - 3.00 pm">7.00 am - 3.00 pm</option>
                                                <option value="3.00 pm - 10.00 pm">3.00 pm - 10.00 pm</option>
                                                <option value="10.00 pm - 7.00 pm">10.00 pm - 7.00 pm</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                className='text-secondary'
                                                defaultValue={singleNurseInfo?.shift}
                                                name="shift"
                                                onBlur={handleUpdateNurse}
                                                required={true}
                                            >
                                                <option>Shift</option>
                                                <option value="Morning">Morning</option>
                                                <option value="Evening">Evening</option>
                                                <option value="Night">Night</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    className='text-secondary'
                                    defaultValue={singleNurseInfo?.description}
                                    placeholder="Nurse Description"
                                    name="description"
                                    type="text"
                                    onBlur={handleUpdateNurse}
                                    required
                                />
                            </Form.Group>
                            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                <Button
                                    className='btn btn-primary mx-auto doctor-update'
                                    type='submit'
                                >Submit</Button>
                                <Button
                                    className='btn btn-primary mx-auto ms-3 doctor-delete'
                                    type='reset'
                                >Reset</Button>
                            </div>
                        </Form>
                    </Card.Body>
                    <Alert variant="warning">*Please press on each input field to successfully submit the form.</Alert>
                </Card>
            </Container>
        </div >
    );
};

export default NurseProfileUpdate;
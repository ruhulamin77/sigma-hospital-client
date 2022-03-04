import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AddNurse = () => {

    const [nurseData, setNurseData] = useState({});
    const [image, setImage] = useState(null);

    const handleAddNurse = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newNurseData = { ...nurseData };
        newNurseData[field] = value;
        setNurseData(newNurseData);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in nurseData) {
            if (Object.hasOwnProperty.call(nurseData, key)) {
                const element = nurseData[key];
                formData.append(`${key}`, element);
            }
        }
        formData.append('image', image);

        fetch('https://shrouded-headland-44423.herokuapp.com/addNurse', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        "A nurse has been successfully added!",
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
                                        placeholder="Full Name"
                                        name="name"
                                        type="text"
                                        onChange={handleAddNurse}
                                        required
                                    />
                                </Form.Group>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                accept='image/*'
                                                name="photo"
                                                type="file"
                                                onChange={e => setImage(e.target.files[0])}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                className='text-secondary'
                                                name="gender"
                                                onChange={handleAddNurse}
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
                                </div>

                            </div>

                            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Enter email address"
                                                name="email"
                                                type="email"
                                                onChange={handleAddNurse}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Phone"
                                                name="phone"
                                                type="number"
                                                onChange={handleAddNurse}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-12 col-md-4'>
                                    <Form.Group className="mb-3">
                                        <Form.Select
                                            className='text-secondary'
                                            name="day"
                                            onBlur={handleAddNurse}
                                            required={true}
                                        >
                                            <option>Working Day</option>
                                            <option value="Monday - Friday">Monday - Friday</option>
                                            <option value="Sunday - Thrusday">Sunday - Thrusday</option>
                                            <option value="Friday - Monday">Friday - Monday</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <Form.Group className="mb-3">
                                        <Form.Select
                                            className='text-secondary'
                                            name="time"
                                            onBlur={handleAddNurse}
                                            required={true}
                                        >
                                            <option>Working Time</option>
                                            <option value="7.00 am - 3.00 pm">7.00 am - 3.00 pm</option>
                                            <option value="3.00 pm - 10.00 pm">3.00 pm - 10.00 pm</option>
                                            <option value="10.00 pm - 7.00 pm">10.00 pm - 7.00 pm</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <Form.Group className="mb-3">
                                        <Form.Select
                                            className='text-secondary'
                                            name="shift"
                                            onBlur={handleAddNurse}
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
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    className='text-secondary'
                                    placeholder="Nurse Description"
                                    name="description"
                                    type="text"
                                    onBlur={handleAddNurse}
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
                </Card>
            </Container>
        </div >
    );
};

export default AddNurse;
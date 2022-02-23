import React, { useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import './AddDoctors.css';

const AddDoctor2 = () => {
    const [doctorData, setDoctorData] = useState({});
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleAddDoctor = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newDoctorData = { ...doctorData };
        newDoctorData[field] = value;
        setDoctorData(newDoctorData);
    }

    console.log(doctorData.length);

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in doctorData) {
            if (Object.hasOwnProperty.call(doctorData, key)) {
                const element = doctorData[key];
                formData.append(`${key}`, element);
            }
        }
        formData.append('image', image);

        fetch('http://localhost:7050/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
    }

    return (
        <div style={{ backgroundColor: "#F4F7F6" }}>
            <Container>
                <Card className='card-control2'>
                    <Card.Body>
                        {success && <Alert variant='success'>Doctor Added Successfully!</Alert>}
                        <Card.Text><b>Basic Information</b></Card.Text>
                        <Form onSubmit={handleSubmit} className='row'>

                            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        className='text-secondary'
                                        placeholder="Full Name"
                                        name="name"
                                        type="text"
                                        onChange={handleAddDoctor}
                                        required
                                    />
                                </Form.Group>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Date of Birth."
                                                name="birthday"
                                                type="date"
                                                onChange={handleAddDoctor}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                className='text-secondary'
                                                name="gender"
                                                onChange={handleAddDoctor}
                                                required
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
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        className='text-secondary'
                                        placeholder="Enter your email"
                                        name="email"
                                        type="email"
                                        onChange={handleAddDoctor}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        className='text-secondary'
                                        placeholder="Linkedin URL"
                                        name="linkedin"
                                        type="url"
                                        onChange={handleAddDoctor}
                                        required
                                    />
                                </Form.Group>
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
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Education - 1"
                                                name="eduLine1"
                                                type="text"
                                                onChange={handleAddDoctor}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Education - 2"
                                                name="eduLine2"
                                                type="text"
                                                onChange={handleAddDoctor}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Education - 3"
                                                name="eduLine3"
                                                type="text"
                                                onChange={handleAddDoctor}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        className='text-secondary'
                                        placeholder="Experience as a doctor"
                                        name="experience"
                                        type="number"
                                        onChange={handleAddDoctor}
                                        required
                                    />
                                </Form.Group>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Phone"
                                                name="phone"
                                                type="number"
                                                onChange={handleAddDoctor}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                className='text-secondary'
                                                name="speciality"
                                                onChange={handleAddDoctor}
                                                required
                                                aria-label="Default select example"
                                            >
                                                <option>Speciality</option>
                                                <option value="Gynecologist">Gynecologist</option>
                                                <option value="Cardiologist">Cardiologist</option>
                                                <option value="Audiologist">Audiologist</option>
                                                <option value="Audiologist">Fertility Consultant</option>
                                                <option value="Audiologist">Surgeon</option>
                                                <option value="Audiologist">Neurologist</option>
                                                <option value="Audiologist">Oocyte and Embryo</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            className='text-secondary'
                                            placeholder="Twitter URL"
                                            name="twitter"
                                            type="url"
                                            onChange={handleAddDoctor}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            className='text-secondary'
                                            placeholder="Facebook URL"
                                            name="facebook"
                                            type="url"
                                            onChange={handleAddDoctor}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            className='text-secondary'
                                            placeholder="Present Address"
                                            name="address"
                                            type="text"
                                            onChange={handleAddDoctor}
                                        />
                                    </Form.Group>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Honors and Awards - 1"
                                                name="awardFirst"
                                                type="text"
                                                onChange={handleAddDoctor}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Honors and Awards - 2"
                                                name="awardSecond"
                                                type="text"
                                                onChange={handleAddDoctor}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Honors and Awards - 3"
                                                name="awardThird"
                                                type="text"
                                                onChange={handleAddDoctor}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>

                            <Button
                                className='btn btn-primary mx-auto'
                                type='submit'
                                style={{ width: "30%" }}
                            >Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div >
    );
};

export default AddDoctor2;
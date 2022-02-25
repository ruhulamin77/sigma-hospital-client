import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Form, Nav } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { useGetDoctorsQuery } from '../../../../features/sigmaApi';
import './DoctorProfile.css';

const DoctorProfile = () => {
    const { id } = useParams();
    const alldoctorInfo = useGetDoctorsQuery();
    const [singleDoctorInfo, setSingleDoctorInfo] = useState([]);
    const [doctorUpdateData, setDoctorUpdateData] = useState({});
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const doctorData = alldoctorInfo?.data?.find(doctorId => doctorId._id === id)
        setSingleDoctorInfo(doctorData);
    }, [alldoctorInfo?.data, id]);

    const handleUpdateDoctor = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newDoctorData = { ...doctorUpdateData };
        newDoctorData[field] = value;
        setDoctorUpdateData(newDoctorData);
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`https://shrouded-headland-44423.herokuapp.com/updateDoctor/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(doctorUpdateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setSuccess(true);
                }
            })
    }

    return (
        <div style={{ backgroundColor: "#F4F7F6" }}>
            <Container>
                <div className='row'>
                    {success && <Alert variant="success">Update Successfully!</Alert>}
                    <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                        <Card className="text-center card-control2">
                            <Card.Img className="w-50 mx-auto rounded-circle mt-3" variant="top" src={`data:image/*;base64,${singleDoctorInfo?.photo}`} />
                            <Card.Body>
                                <Card.Title>{singleDoctorInfo?.name}</Card.Title>
                                <Card.Text>{singleDoctorInfo?.title}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-control2 mt-5">
                            <Card.Body>
                                <Card.Title>Info</Card.Title>
                                <Card.Text className='mt-3'><i className="fas fa-home"></i> Address: <br />{singleDoctorInfo?.address}</Card.Text>
                                <Card.Text className='mt-3'><i className="fas fa-envelope"></i> Email: <br />{singleDoctorInfo?.email}</Card.Text>
                                <Card.Text className='mt-3'><i className="fas fa-mobile"></i> Mobile: <br />{singleDoctorInfo?.phone}</Card.Text>
                                <Card.Text className='mt-3'><i className="fas fa-birthday-cake"></i> Birth Date: <br />{singleDoctorInfo?.birthday}</Card.Text>
                                <hr />
                                <Card.Title className='mb-3'>Social</Card.Title>
                                <a href={singleDoctorInfo?.twitter}
                                    className="text-dark text-decoration-none"
                                >
                                    <i className="fab fa-twitter me-3"></i>Twitter
                                </a> <br />
                                <a href={singleDoctorInfo?.facebook}
                                    className="text-dark text-decoration-none"
                                >
                                    <i className="fab fa-facebook-f me-4"></i>Facebook
                                </a> <br />
                                <a href={singleDoctorInfo?.linkedin}
                                    className="text-dark text-decoration-none"
                                >
                                    <i className="fab fa-linkedin-in me-4"></i>Linkedin
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
                        <Card className="card-control2 p-4">
                            <Card.Title>Update Doctor Information</Card.Title>
                        </Card>

                        <Card className="mt-5 card-control2">
                            <Card.Body>
                                <Card className='card-control2'>
                                    <Card.Body>
                                        <Card.Text className='mb-3'>Basic Information</Card.Text>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    placeholder="Doctor Title"
                                                    name="title"
                                                    type="text"
                                                    onChange={handleUpdateDoctor}
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    as="textarea"
                                                    rows={2}
                                                    className='text-secondary'
                                                    placeholder="Description"
                                                    name="description"
                                                    type="text"
                                                    onChange={handleUpdateDoctor}
                                                    required
                                                />
                                            </Form.Group>
                                            <div className='row mb-3'>
                                                <div className='col-12 col-md-4'>
                                                    <Form.Group>
                                                        <Form.Select
                                                            className='text-secondary'
                                                            name="day"
                                                            onChange={handleUpdateDoctor}
                                                            required
                                                            aria-label="Default select example"
                                                        >
                                                            <option>Working Day</option>
                                                            <option value="Monday - Friday">Monday - Friday</option>
                                                            <option value="Sunday - Thrusday">Sunday - Thrusday</option>
                                                            <option value="Friday - Monday">Friday - Monday</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                                <div className='col-12 col-md-4'>
                                                    <Form.Group>
                                                        <Form.Select
                                                            className='text-secondary'
                                                            name="time"
                                                            onChange={handleUpdateDoctor}
                                                            required
                                                            aria-label="Default select example"
                                                        >
                                                            <option>Working Time</option>
                                                            <option value="7.00 am - 3.00 pm">7.00 am - 3.00 pm</option>
                                                            <option value="3.00 pm - 10.00 pm">3.00 pm - 10.00 pm</option>
                                                            <option value="10.00 pm - 7.00 pm">10.00 pm - 7.00 pm</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                                <div className='col-12 col-md-4'>
                                                    <Form.Group>
                                                        <Form.Select
                                                            className='text-secondary'
                                                            name="shift"
                                                            onChange={handleUpdateDoctor}
                                                            required
                                                            aria-label="Default select example"
                                                        >
                                                            <option>Shift</option>
                                                            <option value="Morning">Morning</option>
                                                            <option value="Evening">Evening</option>
                                                            <option value="Night">Night</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <Card className='p-3 mb-3'>
                                                <div className='row'>
                                                    <div className='col-12 col-md-6'>
                                                        <Form.Group>
                                                            <Form.Select
                                                                className='text-secondary'
                                                                name="skill1"
                                                                onChange={handleUpdateDoctor}
                                                                required
                                                                aria-label="Default select example"
                                                            >
                                                                <option>Skill Set</option>
                                                                <option value="Technique">Technique</option>
                                                                <option value="Empathy">Empathy</option>
                                                                <option value="Operation">Operation</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>
                                                    <div className='col-12 col-md-6'>
                                                        <Form.Group>
                                                            <Form.Control
                                                                className='text-secondary'
                                                                placeholder="Percentage. Ex - 80"
                                                                name="percent1"
                                                                type="number"
                                                                onChange={handleUpdateDoctor}
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className='p-3 mb-3'>
                                                <div className='row'>
                                                    <div className='col-12 col-md-6'>
                                                        <Form.Group>
                                                            <Form.Select
                                                                className='text-secondary'
                                                                name="skill2"
                                                                onChange={handleUpdateDoctor}
                                                                required
                                                                aria-label="Default select example"
                                                            >
                                                                <option>Skill Set</option>
                                                                <option value="Technique">Technique</option>
                                                                <option value="Empathy">Empathy</option>
                                                                <option value="Operation">Operation</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>
                                                    <div className='col-12 col-md-6'>
                                                        <Form.Group>
                                                            <Form.Control
                                                                className='text-secondary'
                                                                placeholder="Percentage. Ex - 80"
                                                                name="percent2"
                                                                type="number"
                                                                onChange={handleUpdateDoctor}
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className='p-3 mb-3'>
                                                <div className='row'>
                                                    <div className='col-12 col-md-6'>
                                                        <Form.Group>
                                                            <Form.Select
                                                                className='text-secondary'
                                                                name="skill3"
                                                                onChange={handleUpdateDoctor}
                                                                required
                                                                aria-label="Default select example"
                                                            >
                                                                <option>Skill Set</option>
                                                                <option value="Technique">Technique</option>
                                                                <option value="Empathy">Empathy</option>
                                                                <option value="Operation">Operation</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>
                                                    <div className='col-12 col-md-6'>
                                                        <Form.Group>
                                                            <Form.Control
                                                                className='text-secondary'
                                                                placeholder="Percentage. Ex - 80"
                                                                name="percent3"
                                                                type="number"
                                                                onChange={handleUpdateDoctor}
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    as="textarea"
                                                    rows={2}
                                                    className='text-secondary'
                                                    placeholder="Doctor Moto"
                                                    name="moto"
                                                    type="text"
                                                    onChange={handleUpdateDoctor}
                                                    required
                                                />
                                            </Form.Group>
                                            <Button
                                                className='btn btn-primary doctor-update'
                                                type='submit'
                                            >Submit</Button>
                                            <Button
                                                className='btn btn-primary ms-3 doctor-delete'
                                                type='reset'
                                            >Reset</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>

                        <Card className="mt-5 card-control2">
                            <Card.Body>
                                <Card className='card-control2'>
                                    <Card.Body>
                                        <Card.Text className='mb-3'>Account Information</Card.Text>
                                        <Form onSubmit={handleSubmit}>


                                            <Button
                                                className='btn btn-primary mx-auto doctor-update'
                                                type='submit'
                                            >Submit</Button>
                                            <Button
                                                className='btn btn-primary mx-auto ms-3 doctor-delete'
                                                type='reset'
                                            >Reset</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>
                    </div>
                </div >

            </Container >
        </div >
    );
};

export default DoctorProfile;
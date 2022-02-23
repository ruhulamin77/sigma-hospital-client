import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import './AddDoctors.css';

const AddDoctors = () => {
    // const [doctorData, setDoctorData] = useState({});
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [phone, setPhone] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [website, setWebsite] = useState('');
    const [image, setImage] = useState(null);
    // const [phone, setName] = useState('');
    // const [experience, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();

        formData.append('name', name);
        formData.append('birthday', birthday);
        formData.append('gender', gender);
        formData.append('email', email);
        formData.append('experience', experience);
        formData.append('speciality', speciality);
        formData.append('phone', phone);
        formData.append('website', website);
        formData.append('image', image);

        // fetch('http://localhost:7050/addDoctor', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => { console.log('Success:', result) })
        //     .catch(error => { console.error('Error:', error) });

    }


    return (
        <div style={{ backgroundColor: "#F4F7F6" }}>
            <Container>
                <Card className='card-control2'>
                    <Card.Body>
                        <Card.Text><b>Basic Information</b></Card.Text>

                        <Form onSubmit={handleSubmit} className='row'>
                            <div className='col-12 col-md-6'>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        className='text-secondary'
                                        placeholder="Full Name"
                                        name="name"
                                        type="text"
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Date of Birth. Ex -"
                                                name="birthday"
                                                type="date"
                                                onChange={e => setBirthday(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                className='text-secondary'
                                                name="gender"
                                                onChange={e => setGender(e.target.value)}
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
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </div>
                            <div className='col-12 col-md-6'>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        className='text-secondary'
                                        placeholder="Experience as a doctor"
                                        name="experience"
                                        type="number"
                                        onChange={e => setExperience(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className='text-secondary'
                                                placeholder="Phone"
                                                name="phone"
                                                type="number"
                                                onChange={e => setPhone(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-6'>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                className='text-secondary'
                                                name="speciality"
                                                onChange={e => setSpeciality(e.target.value)}
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
                                            placeholder="Website URL"
                                            name="website"
                                            type="url"
                                            onChange={e => setWebsite(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </div>
                            </div>
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
                            <Button
                                className='btn btn-primary mx-auto'
                                type='submit'
                                style={{ width: "30%" }}
                            >Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default AddDoctors;
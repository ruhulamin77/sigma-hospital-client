import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetDoctorsQuery } from '../../../../features/sigmaApi';
import Swal from 'sweetalert2'
import './DoctorProfile.css';

const DoctorProfile = () => {
    const { id } = useParams();
    const alldoctorInfo = useGetDoctorsQuery();
    const [singleDoctorInfo, setSingleDoctorInfo] = useState([]);
    const [doctorUpdateData, setDoctorUpdateData] = useState({});
    const [image, setImage] = useState(null);

    useEffect(() => {
        const doctorData = alldoctorInfo?.data?.find(doctorId => doctorId._id === id);
        setSingleDoctorInfo(doctorData);
    }, [alldoctorInfo?.data, id]);

    const handleUpdateDoctor = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newDoctorData = { ...doctorUpdateData };
        newDoctorData[field] = value;
        setDoctorUpdateData(newDoctorData);
    }
    console.log(doctorUpdateData);

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in doctorUpdateData) {
            if (Object.hasOwnProperty.call(doctorUpdateData, key)) {
                const element = doctorUpdateData[key];
                formData.append(`${key}`, element);
            }
        }
        formData.append('image', image);

        fetch(`https://shrouded-headland-44423.herokuapp.com/updateDoctor/${id}`, {
            method: 'PUT',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        "Doctor's informatoin has been successfully updated!",
                        'success'
                    )
                }
            })
    }

    return (
        <div style={{ backgroundColor: "#F4F7F6", padding: "20px 0" }}>
            <Container>
                <div className='row'>
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
                                <Card.Text className='mb-3'>Basic Information</Card.Text>
                                <Form onSubmit={handleSubmit}>

                                    <div className='row'>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.name}
                                                    placeholder="Full Name"
                                                    name="name"
                                                    type="text"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.birthday}
                                                    placeholder="Birth Date"
                                                    name="birthday"
                                                    type="date"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Select
                                                    className='text-secondary'
                                                    name="gender"
                                                    onBlur={handleUpdateDoctor}
                                                    defaultValue={singleDoctorInfo?.gender}
                                                >
                                                    <option>Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    accept='image/*'
                                                    name="photo"
                                                    type="file"
                                                    onChange={e => setImage(e.target.files[0])}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.email}
                                                    placeholder="Email Accouont"
                                                    name="email"
                                                    type="email"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.linkedin}
                                                    placeholder="Linkdin Account"
                                                    name="linkedin"
                                                    type="url"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.eduLine1}
                                                    placeholder="Name of Certificate-1"
                                                    name="eduLine1"
                                                    type="text"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.eduLine2}
                                                    placeholder="Name of Certificate-2"
                                                    name="eduLine2"
                                                    type="text"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.eduLine3}
                                                    placeholder="Name of Certificate-3"
                                                    name="eduLine3"
                                                    type="text"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                        </div>


                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.experience}
                                                    placeholder="Experience (year)"
                                                    name="experience"
                                                    type="number"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                            <div className='row'>
                                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control
                                                            className='text-secondary'
                                                            defaultValue={singleDoctorInfo?.phone}
                                                            placeholder="Phone"
                                                            name="phone"
                                                            type="number"
                                                            onBlur={handleUpdateDoctor}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Select
                                                            className='text-secondary'
                                                            name="speciality"
                                                            onBlur={handleUpdateDoctor}
                                                            defaultValue={singleDoctorInfo?.speciality}
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
                                                        defaultValue={singleDoctorInfo?.twitter}
                                                        placeholder="Twitter Account"
                                                        name="twitter"
                                                        type="url"
                                                        onBlur={handleUpdateDoctor}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        className='text-secondary'
                                                        defaultValue={singleDoctorInfo?.facebook}
                                                        placeholder="Facebook Account"
                                                        name="facebook"
                                                        type="url"
                                                        onBlur={handleUpdateDoctor}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        className='text-secondary'
                                                        defaultValue={singleDoctorInfo?.address}
                                                        placeholder="Present Address"
                                                        name="address"
                                                        type="text"
                                                        onBlur={handleUpdateDoctor}
                                                        required
                                                    />
                                                </Form.Group>
                                            </div>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.awardFirst}
                                                    placeholder="Honors and Awards-1"
                                                    name="awardFirst"
                                                    type="text"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.awardSecond}
                                                    placeholder="Honors and Awards-2"
                                                    name="awardSecond"
                                                    type="text"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    className='text-secondary'
                                                    defaultValue={singleDoctorInfo?.awardThird}
                                                    placeholder="Honors and Awards-3"
                                                    name="awardThird"
                                                    type="text"
                                                    onBlur={handleUpdateDoctor}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <hr style={{ color: "gray", border: "3px solid gray" }} />

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            className='text-secondary'
                                            placeholder="Doctor Title"
                                            name="title"
                                            type="text"
                                            onBlur={handleUpdateDoctor}
                                            defaultValue={singleDoctorInfo?.title}
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
                                            onBlur={handleUpdateDoctor}
                                            defaultValue={singleDoctorInfo?.description}
                                            required
                                        />
                                    </Form.Group>
                                    <div className='row mb-3'>
                                        <div className='col-12 col-md-4'>
                                            <Form.Group>
                                                <Form.Select
                                                    className='text-secondary'
                                                    name="day"
                                                    onBlur={handleUpdateDoctor}
                                                    defaultValue={singleDoctorInfo?.day}
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
                                                    onBlur={handleUpdateDoctor}
                                                    defaultValue={singleDoctorInfo?.time}
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
                                                    onBlur={handleUpdateDoctor}
                                                    defaultValue={singleDoctorInfo?.shift}
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
                                                        onBlur={handleUpdateDoctor}
                                                        defaultValue={singleDoctorInfo?.skill1}
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
                                                        onBlur={handleUpdateDoctor}
                                                        defaultValue={singleDoctorInfo?.percent1}
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
                                                        onBlur={handleUpdateDoctor}
                                                        defaultValue={singleDoctorInfo?.skill2}
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
                                                        onBlur={handleUpdateDoctor}
                                                        defaultValue={singleDoctorInfo?.percent2}
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
                                                        onBlur={handleUpdateDoctor}
                                                        defaultValue={singleDoctorInfo?.skill3}
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
                                                        onBlur={handleUpdateDoctor}
                                                        defaultValue={singleDoctorInfo?.percent3}
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
                                            onBlur={handleUpdateDoctor}
                                            defaultValue={singleDoctorInfo?.moto}
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

                        <Card className="mt-5 card-control2">
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
                    </div>
                </div >

            </Container >
        </div >
    );
};

export default DoctorProfile;
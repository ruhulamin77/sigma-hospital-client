import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetDoctorsQuery } from '../../../../features/sigmaApi';

const DoctorProfile = () => {
    const { id } = useParams();
    const alldoctorInfo = useGetDoctorsQuery();
    const [singleDoctorInfo, setSingleDoctorInfo] = useState([]);

    useEffect(() => {
        const doctorData = alldoctorInfo?.data?.find(doctorId => doctorId._id === id)
        setSingleDoctorInfo(doctorData);
    }, [alldoctorInfo?.data, id]);

    console.log(singleDoctorInfo);

    return (
        <div>
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
                                <Card.Text className='mt-3'><i class="fas fa-home"></i> Address: <br />{singleDoctorInfo?.address}</Card.Text>
                                <Card.Text className='mt-3'><i class="fas fa-envelope"></i> Email: <br />{singleDoctorInfo?.email}</Card.Text>
                                <Card.Text className='mt-3'><i class="fas fa-mobile"></i> Mobile: <br />{singleDoctorInfo?.phone}</Card.Text>
                                <Card.Text className='mt-3'><i class="fas fa-birthday-cake"></i> Birth Date: <br />{singleDoctorInfo?.birthday}</Card.Text>
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
                                    <i class="fab fa-facebook-f me-4"></i>Facebook
                                </a> <br />
                                <a href={singleDoctorInfo?.linkedin}
                                    className="text-dark text-decoration-none"
                                >
                                    <i class="fab fa-linkedin-in me-4"></i>Linkedin
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
                        fghdfgh
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default DoctorProfile;
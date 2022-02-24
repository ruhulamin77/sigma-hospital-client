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
                        <Card className="text-center">
                            <Card.Img className="w-50 mx-auto rounded-circle mt-3" variant="top" src={singleDoctorInfo.photo} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                                <Button variant="primary">Go somewhere</Button>
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
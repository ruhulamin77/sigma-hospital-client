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
                            <Card.Img className="w-50 mx-auto rounded-circle mt-3" variant="top" src={`data:image/*;base64,${singleDoctorInfo?.photo}`} />
                            <Card.Body>
                                <Card.Title>{singleDoctorInfo?.name}</Card.Title>
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
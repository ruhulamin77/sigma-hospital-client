import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import watch from '../../image/watch.png';
import './SingleDoctor.css';

const SingleDoctor = () => {
    const { id } = useParams();
    const [doctorsInfo, setDoctorsInfo] = useState([]);
    const [singleDoctor, setSingleDoctor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7050/doctors')
            .then(res => res.json())
            .then(data => setDoctorsInfo(data))
    }, []);

    useEffect(() => {
        const foundDoctor = doctorsInfo?.find(doctors => doctors?._id === id);
        setSingleDoctor(foundDoctor);
    }, [doctorsInfo, id]);

    return (
        <div>
            <div className='single-doctor-header'>
                <div>
                    <Container className='text-center header-text'>
                        <h1>{singleDoctor?.name}</h1>
                    </Container>
                </div>
            </div>
            <div className='single-doctor-body'>
                <Container>
                    <div className='row'>
                        <div className='col-md-4 col-12'>
                            <div className="card doctor-card">
                                <img src={singleDoctor?.photo} className="card-img" alt="..." />
                                <div className="row card-img-overlay">
                                    <div className='icon-setup'>
                                        <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                                        <br />
                                        <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                                        <br />
                                        <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-google"></i></a>
                                    </div>
                                    <div className='mt-auto about-doctor'>
                                        <h2>{singleDoctor?.name}</h2>
                                        <h5>{singleDoctor?.title}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='opning-time2'>
                                <div className='service-card-icon2'>
                                    <i className="fas fa-clock fa-3x"></i>
                                </div>
                                <h4 className='time2'>Opening Time</h4>
                                <div className='table-data2'>
                                    <Table>
                                        <tbody>

                                            <tr>
                                                <td>Mondy-Friday</td>
                                                <td>6:00 – 7:00 pm</td>
                                            </tr>
                                            <tr>
                                                <td>Saturday</td>
                                                <td>9:00 – 8:00 pm</td>
                                            </tr>
                                            <tr>
                                                <td>Sunday</td>
                                                <td>10:00 – 9:00 pm</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8 col-12'>
                            dsgf
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default SingleDoctor;
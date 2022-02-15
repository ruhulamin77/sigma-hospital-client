import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import logo from '../../images/logo/logo1.png';
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
                                    <div className='mt-auto about-doctor2'>
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
                                                <td>{singleDoctor?.day?.day1}</td>
                                                <td>{singleDoctor?.time?.morning}</td>
                                            </tr>
                                            <tr>
                                                <td>{singleDoctor?.day?.day2}</td>
                                                <td>{singleDoctor?.time?.afternoon}</td>
                                            </tr>
                                            <tr>
                                                <td>{singleDoctor?.day?.day3}</td>
                                                <td>{singleDoctor?.time?.night}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='contact2'>
                                <img src={logo} alt="Logo" />
                                <h2>Sigmacare Services</h2>
                                <div className='info'>
                                    <p><b>Call</b> : +123456789</p>
                                    <p><b>Mail</b> : support@example.com</p>
                                    <p><b>Address</b> : 1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                                </div>
                                <nav>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-lg"></i></a>
                                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-lg"></i></a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fab fa-youtube fa-lg"></i></a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-lg"></i></a>
                                </nav>
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
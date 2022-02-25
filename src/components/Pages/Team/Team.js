import React, { useEffect, useState } from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetDoctorsQuery } from '../../../features/sigmaApi';
import backPic from "../../../images/ki-14-1.jpg"
import './Team.css'

const Team = () => {
    const doctorInfo = useGetDoctorsQuery();
    const [pageTeam, setPageTeam] = useState(0)
    const handleHight = () => setPageTeam(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleHight)
    }, [])
    return (
        <>
            <div style={{ background: `url(${backPic})` }} className="backcrumb-my ">
                <nav aria-label="breadcrumb">
                    <h3>OUR TEAM</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">OUR TEAM</li>
                    </ol>
                </nav>
            </div>
            <div className="team padding-container">
                <h4 style={{ transform: `translateX(${pageTeam * 1.6}px)`, paddingTop: "30px" }}>OUR TEAM</h4>
                <Container>
                    <Row>
                        <div className="title text-center">
                            <h6>Doctors</h6>
                            <h3>Best Specialist Doctors</h3>
                        </div>
                    </Row>
                    <Row xs={1} sm={1} md={2} lg={3}>
                        {
                            doctorInfo?.data?.map(doctor =>
                                <Col key={doctor._id}>
                                    <div className="card my-doctor doctor-card my-3">
                                        <img src={`data:image/*;base64,${doctor?.photo}`} className="card-img" alt="..." />
                                        <div className="row card-img-overlay">
                                            <div className='icon-setup'>
                                            <a href={doctor?.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                                            <br />
                                            <a href={doctor?.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                                            <br />
                                            <a href={doctor?.email} target="_blank" rel="noreferrer"><i className="fab fa-google"></i></a>
                                            </div>
                                            <div className='mt-auto about-doctor'>
                                            <h2>
                                                <NavLink to={`/team/${doctor?._id}`} className="text-decoration-none">{doctor?.name}</NavLink>
                                            </h2>
                                            <h5>{doctor?.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Team;
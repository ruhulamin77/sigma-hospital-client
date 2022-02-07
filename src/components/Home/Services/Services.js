import React from 'react';
import './Services.css';
import serviceImg from '../../../images/ki-020.png';
import { Card, CardGroup, Nav } from 'react-bootstrap';

const Services = () => {
    return (
        <div className='mt-3'>
            <div className='row'>
                <div className='col-12 col-md-8 service-left'>
                    <h6 style={{ letterSpacing: "3px" }}>SERVICES</h6>
                    <h1>We Provide <br /> <span className='fw-light'> Medical Services</span></h1>
                    <p className='text-secondary lh-2 mt-3'>It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.</p>
                    <button className="service-btn">
                        Services <i className="fas fa-plus btn-icon"></i>
                    </button>
                </div>
                <div className='col-12 col-md-4 service-right'>
                    <img src={serviceImg} alt="" />
                </div>
            </div>

            <div>
                <CardGroup className='service-card'>
                    <Card className='service-first-card rounded-0'>
                        <div className='service-card-icon'>
                            <i className="fas fa-users fa-3x"></i>
                        </div>
                        <Card.Body>
                            <h2>Family Consultation</h2>
                            <Card.Text className='mt-4 mb-4 text-secondary'>
                                It is a long established fact that a will be distracted by the readable content of a page looking at its layout.
                            </Card.Text>
                            <Nav.Link className='read-more-link'>
                                READ MORE <i className="fas fa-plus"></i>
                            </Nav.Link>
                        </Card.Body>
                    </Card>
                    <Card className='service-middle-card rounded-0'>
                        <div className='service-card-icon'>
                            <i class="fas fa-notes-medical fa-3x"></i>
                        </div>
                        <Card.Body>
                            <h2>Home Health Services</h2>
                            <Card.Text className='mt-4 mb-4 text-secondary'>
                                It is a long established fact that a will be distracted by the readable content of a page looking at its layout.
                            </Card.Text>
                            <Nav.Link className='read-more-link'>
                                READ MORE <i className="fas fa-plus"></i>
                            </Nav.Link>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 rounded-0'>
                        <div className='service-card-icon'>
                            <i class="fas fa-thumbs-up fa-3x"></i>
                        </div>
                        <Card.Body>
                            <h2>Minor Procedures</h2>
                            <Card.Text className='mt-4 mb-4 text-secondary'>
                                It is a long established fact that a will be distracted by the readable content of a page looking at its layout.
                            </Card.Text>
                            <Nav.Link className='read-more-link'>
                                READ MORE <i className="fas fa-plus"></i>
                            </Nav.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Services;
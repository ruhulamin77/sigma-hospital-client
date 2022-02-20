import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './SingleCardDoctor.css'

const SingleCardDoctor = ({ doc }) => {
    const { _id, photo, name, title, live, social } = doc;
    return (
        <div>
            <Col>
                <Card className='text-center card-control2'>
                    <Card.Img className='doctor-image' variant="top" src={photo} />
                    <Card.Body>
                        <NavLink to={`/allDoctors/${_id}`} style={{ textDecoration: "none" }}><Card.Title>{name}</Card.Title></NavLink>
                        <small>{title}</small>
                        <div className='doctor-social-media'>
                            <a href={social?.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f text-secondary"></i></a>
                            <br />
                            <a href={social?.likedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in text-secondary"></i></a>
                            <br />
                            <a href={social?.twiter} target="_blank" rel="noreferrer"><i className="fab fa-twitter text-secondary"></i></a>
                        </div>
                        <Card.Text>{live}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCardDoctor;
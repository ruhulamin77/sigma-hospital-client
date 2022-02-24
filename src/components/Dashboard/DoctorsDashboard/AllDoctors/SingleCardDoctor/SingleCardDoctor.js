import React, { useState } from 'react';
import { Button, Card, Col, Nav, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './SingleCardDoctor.css'

const SingleCardDoctor = ({ doc }) => {
    const { _id, photo, name, title, live, social } = doc;
    const [deleteItem, setDeleteItem] = useState(false);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete this file?")
        if (proceed) {
            fetch(`http://localhost:7050/doctors/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => setDeleteItem(data))
        }
        window.location.reload();
    }

    return (
        <div>
            {deleteItem && <Alert variant="success">Delete Successfully!</Alert>}
            <Col>
                <Card className='text-center card-control2'>
                    <Card.Img className='doctor-image' variant="top" src={photo} />
                    <Card.Body>
                        <NavLink to={`/allDoctors/${_id}`} style={{ textDecoration: "none" }}><Card.Title>{name}</Card.Title></NavLink>
                        <small className='text-secondary'>{title}</small>
                        <div className='doctor-social-media'>
                            <a href={social?.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f text-secondary"></i></a>
                            <br />
                            <a href={social?.likedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in text-secondary"></i></a>
                            <br />
                            <a href={social?.twiter} target="_blank" rel="noreferrer"><i className="fab fa-twitter text-secondary"></i></a>
                        </div>
                        <Card.Text>{live}</Card.Text>
                        <div className='d-flex justify-content-evenly align-items-start mt-3'>
                            <NavLink to={`/allDoctors/${_id}`}>
                                <Button className='doctor-update'>Update</Button>
                            </NavLink>
                            <Button onClick={() => handleDelete(_id)} className='doctor-delete'>Delete</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCardDoctor;
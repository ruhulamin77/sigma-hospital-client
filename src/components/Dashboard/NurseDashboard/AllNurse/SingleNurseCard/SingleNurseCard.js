import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleNurseCard = ({ nurse }) => {
    const { _id, photo, name, description, day, time, shift, email, phone, gender } = nurse;

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete this file?")
        if (proceed) {
            fetch(`http://localhost:7050/nurses/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire(
                            'Good job!',
                            'The Doctor has been successfully deleted!',
                            'success'
                        )
                    }
                })
        }
    }

    return (
        <div>
            <Col>
                <Card className='text-center card-control2'>
                    <Card.Img className='doctor-image' variant="top" src={`data:image/*;base64,${photo}`} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <small className='text-secondary'>{email}</small>
                        <div className='row mb-3 mt-3'>
                            <div className='col-7'>Contact: {phone}</div>
                            <div className='col-5'>Gernder: {gender}</div>
                        </div>
                        <hr />
                        <div className='row mb-3 mt-3'>
                            <div className='col-4'>Duty: {day}</div>
                            <div className='col-4'>Time: {time}</div>
                            <div className='col-4'>Shift: {shift}</div>
                        </div>
                        <hr />
                        <Card.Text style={{ textAlign: "justify", fontSize: "14px" }}> <b>Decription:</b> {description}</Card.Text>
                        <div className='d-flex justify-content-evenly align-items-start mt-3'>
                            <NavLink to={`/allNurse/update/${_id}`}>
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

export default SingleNurseCard;
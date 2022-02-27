import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useGetDoctorsQuery } from '../../../../../features/sigmaApi';
import SingleCardDoctor from '../SingleCardDoctor/SingleCardDoctor';
import './AllDoctors.css';

const AllDoctors = () => {
    const [deleteItem, setDeleteItem] = useState(false);
  
    const doctorsCollection = useGetDoctorsQuery() || {};
    const [Item, setItem] = useState(doctorsCollection?.data);
    console.log(Item, "item");


    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete this file?")
        if (proceed) {
            fetch(`https://shrouded-headland-44423.herokuapp.com/doctors/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => setDeleteItem(data))
            const newItem = Item?.filter( items => items?._id !== id)
            setItem(newItem)
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

    // const { isLoading } = useAuth();

    return (
        <div style={{ backgroundColor: "#F4F7F6", padding: "20px 0" }}>
            <Container>
                <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                    {Item?.map((doc) => (
                        <SingleCardDoctor
                            key={doc._id}
                            doc={doc}
                            handleDelete={handleDelete}
                        ></SingleCardDoctor>
                    ))}
                    <Card style={{ width: '10rem', marginLeft: "1rem" }} className='text-center card-control2'>
                        <Card.Body className='row'>
                            <div className='my-auto'>
                                <Card.Text className='text-secondary'><b>Add New Docter</b></Card.Text>
                                <NavLink to="/addDoctors">
                                    <Card.Text className='adddoctor-icon'><i className="fas fa-plus-circle"></i></Card.Text>
                                </NavLink>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};

export default AllDoctors;
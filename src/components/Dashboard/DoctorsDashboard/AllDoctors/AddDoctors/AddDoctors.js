import React from 'react';
import { Card } from 'react-bootstrap';
import './AddDoctors.css'

const AddDoctors = () => {
    return (
        <div>
            <Card className='text-center card-control2'>
                <Card.Body>
                    <Card.Text><b>Add New Docter</b></Card.Text>
                    <Card.Text className='adddoctor-icon'><i class="fas fa-plus-circle"></i></Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddDoctors;
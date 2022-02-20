import React from 'react';
import { Card, Container, FormControl, InputGroup } from 'react-bootstrap';
import './AddDoctors.css'

const AddDoctors = () => {
    return (
        <div style={{ backgroundColor: "#F4F7F6" }}>
            <Container>
                <Card className='card-control2'>
                    <Card.Body>
                        <Card.Text><b>Basic Information</b></Card.Text>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Doctor Name"
                                        name="doctorname"
                                        type="text"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </div>
                            <div className='col-12 col-md-6'>
                                sdgf
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default AddDoctors;
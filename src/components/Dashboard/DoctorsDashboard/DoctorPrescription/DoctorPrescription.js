import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const DoctorPrescription = () => {
    const [inputFields, setInputFields] = useState([
        { number: "", medicineName: "", feedingSystem: "" }
    ]);

    const handleChangeInput = (index, e) => {
        const values = [...inputFields]
        values[index][e.target.name] = e.target.value;
        setInputFields(values);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("worked");
        console.log(inputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { number: "", medicineName: "", feedingSystem: "" }])
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }

    return (
        <div style={{ backgroundColor: "#F4F7F6", padding: "0 20px" }}>
            <Card className="card-control2">
                <h3 className='mb-5'>Prescription</h3>
                <Form onSubmit={handleSubmit}>
                    {inputFields.map((inputField, index) => (
                        <div key={index} className="row">
                            <Form.Group className="col-12 col-md-2 mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="number"
                                    placeholder="Serial no."
                                    name='number'
                                    value={inputField.number}
                                    onChange={e => handleChangeInput(index, e)}
                                />
                            </Form.Group>
                            <Form.Group className="col-12 col-md-4 mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="text"
                                    placeholder="Medicine Name"
                                    name='medicineName'
                                    value={inputField.medicineName}
                                    onChange={e => handleChangeInput(index, e)}
                                />
                            </Form.Group>
                            <Form.Group className="col-12 col-md-2 mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="string"
                                    placeholder="Feeding System"
                                    name='feedingSystem'
                                    value={inputField.feedingSystem}
                                    onChange={e => handleChangeInput(index, e)}
                                />
                            </Form.Group>
                            <div className='col-12 col-md-4 mb-3'>
                                <Button onClick={() => handleRemoveFields(index)} className='doctor-update me-2' ><i className="fas fa-minus-square"></i></Button>
                                <Button onClick={() => handleAddFields()} className='doctor-delete' ><i className="fas fa-plus-square"></i></Button>
                            </div>
                        </div>
                    ))}
                </Form>
                <Button onClick={handleSubmit} className='btn btn-info ms-3 w-25 text-light fw-bold'>Send <i className="fas fa-cloud-upload-alt"></i></Button>
            </Card>
        </div >
    );
};

export default DoctorPrescription;
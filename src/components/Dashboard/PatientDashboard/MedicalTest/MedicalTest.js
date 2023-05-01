import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const MedicalTest = () => {
  const { id } = useParams();
  console.log(id);
  const [inputFields, setInputFields] = useState([
    { number: '', medicalTestName: '' },
  ]);

  const handleChangeInput = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { number: '', medicalTestName: '' }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index + 1, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    fetch(`https://sigma-hospital-server.onrender.com/medicalTest/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(inputFields),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: 'success',
            title: 'Patient medical test has been successfully appointed!',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div
      style={{ backgroundColor: '#F4F7F6', padding: '20px' }}
      className="borderSetup"
    >
      <Card className="shadow p-3">
        <h3 className="mb-5">Patient Prescription</h3>
        <Form onSubmit={handleSubmit}>
          <h5 className="mb-3">Details</h5>
          {inputFields.map((inputField, index) => (
            <div key={index} className="row">
              <Form.Group
                className="col-12 col-md-2 mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  value={inputField?.number}
                  type="number"
                  placeholder="Serial no."
                  name="number"
                  onChange={(e) => handleChangeInput(index, e)}
                  required
                />
              </Form.Group>
              <Form.Group
                className="col-12 col-md-4 mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  value={inputField?.medicalTestName}
                  type="text"
                  placeholder="Medicine Test Name"
                  name="medicalTestName"
                  onChange={(e) => handleChangeInput(index, e)}
                  required
                />
              </Form.Group>
              <div className="col-12 col-md-4 mb-3">
                <Button
                  onClick={() => handleRemoveFields(index)}
                  className="doctor-update me-2"
                >
                  <i className="fas fa-minus-square"></i>
                </Button>
                <Button
                  onClick={() => handleAddFields()}
                  className="doctor-delete"
                >
                  <i className="fas fa-plus-square"></i>
                </Button>
              </div>
            </div>
          ))}

          <Button
            type="submit"
            className="doctor-delete"
            data-bs-toggle="tooltip"
            title="Press this button to take medical test"
          >
            Medical Test
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default MedicalTest;

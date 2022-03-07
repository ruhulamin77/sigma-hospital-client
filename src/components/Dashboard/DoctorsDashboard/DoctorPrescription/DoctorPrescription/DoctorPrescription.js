import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import DoctorData from "../DoctorData/DoctorData";
import PatientData from "../PatientData/PatientData";
import "./DoctorPrescription.css";
import { useSelector } from "react-redux";

const DoctorPrescription = () => {
  const doctor = JSON.parse(localStorage.getItem("admin"))
  console.log(doctor.adminEmail)
  const [inputFields, setInputFields] = useState([
    { number: "", medicineName: "", feedingSystem: "" },
  ]);

  const handleChangeInput = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const press = inputFields.map((pres) =>
      fetch("https://shrouded-headland-44423.herokuapp.com/prescription", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(pres),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire(
              "Good job!",
              "A doctor has been successfully added!",
              "success"
            );
          }
        })
    );
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { number: "", medicineName: "", feedingSystem: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index + 1, 1);
    setInputFields(values);
  };





  return (
    <div style={{ backgroundColor: "#F4F7F6", padding: "20px" }}>
      <Card className="card-control2">
        <h3 className="mb-5">Prescription</h3>
        <Form onSubmit={handleSubmit}>
          <div className="row doctor-patient mb-5">
            <Card className="col-12 col-md-6 card-control2">
              <DoctorData />
              {/* {doctor.name} */}
            </Card>
            <Card className="col-12 col-md-6 card-control2">
              <PatientData />

            </Card>
          </div>
          {inputFields.map((inputField, index) => (
            <div key={index} className="row">
              <Form.Group
                className="col-12 col-md-2 mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="number"
                  placeholder="Serial no."
                  name="number"
                  value={inputField.number}
                  onChange={(e) => handleChangeInput(index, e)}
                />
              </Form.Group>
              <Form.Group
                className="col-12 col-md-4 mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Medicine Name and Power"
                  name="medicineName"
                  value={inputField.medicineName}
                  onChange={(e) => handleChangeInput(index, e)}
                />
              </Form.Group>
              <Form.Group
                className="col-12 col-md-2 mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="string"
                  placeholder="Feeding System"
                  name="feedingSystem"
                  value={inputField.feedingSystem}
                  onChange={(e) => handleChangeInput(index, e)}
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
        </Form>
        <Button
          onClick={handleSubmit}
          className="btn btn-primary w-25 text-light"
        >
          Send <i className="fas fa-cloud-upload-alt"></i>
        </Button>
      </Card>
    </div>
  );
};

export default DoctorPrescription;

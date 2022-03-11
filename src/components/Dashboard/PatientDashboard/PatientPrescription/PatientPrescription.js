import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "./PatientPrescription";
import { useSelector } from "react-redux";
import { MdSend } from 'react-icons/md'
import { NavLink, useParams } from "react-router-dom";
import { useGetAppointmentsQuery, useGetPrescriptionsQuery } from "../../../../features/sigmaApi";

const PatientPrescription = () => {

  const { id } = useParams();
  const allAppoint = useGetAppointmentsQuery();
  const allPrescription = useGetPrescriptionsQuery();
  const [singleAppointment, setSingleAppointment] = useState([]);
  const [singlePrescriptionData, setSinglePrescriptionData] = useState([]);
  console.log(id);
  console.log("allPrescriptionData", allPrescription.data);
  console.log("singleAppointment", singleAppointment);
  console.log("singlePrescriptionData", singlePrescriptionData);

  useEffect(() => {
    const singleAppoint = allAppoint?.data?.find(appoint => appoint._id === id);
    setSingleAppointment(singleAppoint);
  }, [allAppoint?.data, id]);

  useEffect(() => {
    const singlePrecData = allPrescription?.data?.find(precData => precData?.patientName === singleAppointment?.firstName);
    setSinglePrescriptionData(singlePrecData);
  }, [allPrescription?.data, singleAppointment?.firstName]);

  const [inputFields, setInputFields] = useState([
    { number: "", medicineName: "", feedingSystem: "" },
  ]);

  const handleChangeInput = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const newValue = {
    inputFields: inputFields,
    doctorName: singleAppointment?.doctor,
    patientName: singleAppointment?.firstName,
    patientAge: singleAppointment?.Age,
    patientGender: singleAppointment?.gender
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:7050/prescriptions`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Patient prescription has been successfully added!',
            showConfirmButton: false,
            timer: 2000
          })
        }
      })
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
        <h3 className="mb-5">Patient Prescription</h3>
        <Form onSubmit={handleSubmit}>
          <div className="row mb-5">
            <Form.Group className="col-12 col-md-3 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Doctor Name</Form.Label>
              <Form.Control type="text" defaultValue={singlePrescriptionData?.doctorName} />
            </Form.Group>
            <Form.Group className="col-12 col-md-3 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" defaultValue={singlePrescriptionData?.patientName} />
            </Form.Group>
            <Form.Group className="col-12 col-md-3 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Age</Form.Label>
              <Form.Control type="text" defaultValue={singlePrescriptionData?.patientAge} />
            </Form.Group>
            <Form.Group className="col-12 col-md-3 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Gender</Form.Label>
              <Form.Control type="text" defaultValue={singlePrescriptionData?.patientGender} />
            </Form.Group>
          </div>
          <h5 className="mb-3">Details</h5>
          {singlePrescriptionData?.inputFields?.map(singleData => (
            <div key={singleData._id}>
              {inputFields.map((inputField, index) => (
                <div key={index} className="row">
                  <Form.Group
                    className="col-12 col-md-2 mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      defaultValue={singleData?.number}
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
                      defaultValue={singleData?.medicineName}
                      type="text"
                      placeholder="Medicine Name and Power"
                      name="medicineName"
                      onChange={(e) => handleChangeInput(index, e)}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="col-12 col-md-2 mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      defaultValue={singleData.feedingSystem}
                      type="string"
                      placeholder="Feeding System"
                      name="feedingSystem"
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
            </div>
          ))}

          <Button type="submit" className="doctor-delete me-3" data-bs-toggle="tooltip" title="Only press this button after writing the prescription for the first time">
            Send <MdSend />
          </Button>
          <NavLink to={`/dashboard/singlePrescription/update/${singlePrescriptionData?._id}`}>
            <Button className="doctor-update" data-bs-toggle="tooltip" title="Press this button to update the prescription each time">
              Update Prescription
            </Button>
          </NavLink>

        </Form>
      </Card>
    </div>
  );
};

export default PatientPrescription;

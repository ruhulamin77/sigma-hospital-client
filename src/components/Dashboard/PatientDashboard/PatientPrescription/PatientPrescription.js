import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "./PatientPrescription";
import { useSelector } from "react-redux";
import { MdSend } from 'react-icons/md';
import { HiLocationMarker, HiMail, HiPhoneMissedCall } from "react-icons/hi";
import { NavLink, useParams } from "react-router-dom";
import { useGetAppointmentsQuery, useGetPrescriptionsQuery } from "../../../../features/sigmaApi";
import SinglePatientPrescription from "../SinglePatientPrescription/SinglePatientPrescription";

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
    const singlePrecData = allPrescription?.data?.find(precData => precData?.patientFirstName === singleAppointment?.firstName);
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
    patientFirstName: singleAppointment?.firstName,
    patientLastName: singleAppointment?.lastName,
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
                  value={inputField?.medicineName}
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
                  value={inputField.feedingSystem}
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

          <Button type="submit" className="doctor-delete me-3" data-bs-toggle="tooltip" title="Only press this button after writing the prescription for the first time">
            Send <MdSend />
          </Button>

          <Button className="doctor-update" data-bs-toggle="tooltip" title="Press this button to update the prescription each time">
            Update Prescription
          </Button>

        </Form>
      </Card>


      <Card style={{ backgroundColor: "#C3D4F6" }} className="mt-5">
        <div className='p-5'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
              <h1 style={{ letterSpacing: "2px" }}>Invoice</h1>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
              <h6>Sigma Care Hospial</h6>
              <p><HiLocationMarker className='me-2' />1234 North Avenue Luke, South Bend, IN 360001</p>
              <p><HiPhoneMissedCall className='me-2' />+8801629094984</p>
              <p><HiMail className='me-2' />support@gmail.com</p>
            </div>
          </div>
          <div style={{ marginTop: "5rem" }} className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
              <h6>Doctor Name</h6>
              <p>{singlePrescriptionData?.doctorName}</p>
              <h6 className='mt-3'>Patient Details</h6>
              <p>{singlePrescriptionData?.patientFirstName} {singlePrescriptionData?.patientLastName}</p>
              <p>Gender: {singlePrescriptionData?.patientGender}</p>
              <p>Age: {singlePrescriptionData?.patientAge}</p>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
              <h6>Invoice number</h6>
              <p>{singlePrescriptionData?._id}</p>
            </div>
          </div>
        </div>
      </Card>

    </div>
  );
};

export default PatientPrescription;

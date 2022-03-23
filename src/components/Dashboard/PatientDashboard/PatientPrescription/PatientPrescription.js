import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { MdSend } from 'react-icons/md';
import { NavLink, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetAppointmentsQuery, useGetNursesQuery, useGetPrescriptionsQuery } from "../../../../features/sigmaApi";
import "./PatientPrescription.css";

const PatientPrescription = () => {

  const { id } = useParams();
  const allAppoint = useGetAppointmentsQuery();
  const allPrescription = useGetPrescriptionsQuery();
  const allNurse = useGetNursesQuery();
  console.log(allNurse.data);
  const [singleAppointment, setSingleAppointment] = useState([]);
  const [singlePrescriptionData, setSinglePrescriptionData] = useState([]);
  const [nurseTime, setNurseTime] = useState([]);
  const [nurseDay, setNurseDay] = useState([]);
  const [nurseName, setNurseName] = useState({});
  console.log(nurseName);
  console.log(singleAppointment);
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
    patientGender: singleAppointment?.gender,


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
          });
          if (Swal) {
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        }
      })
  };


  const updateValue = {
    inputFields: inputFields
  };

  const updatePrescription = e => {
    e.preventDefault();
    fetch(`http://localhost:7050/prescriptions/${singlePrescriptionData._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            icon: 'success',
            title: 'Patient prescription has been successfully updated!',
            showConfirmButton: false,
            timer: 2000
          });
          if (Swal) {
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        }
      })
  };

  let today = new Date().toLocaleDateString();
  const appointNurse = {
    nurseData: nurseName,
    appointDate: today,
  };
  const handleAppointNurse = e => {
    e.preventDefault();
    fetch(`http://localhost:7050/appointNurse/${singlePrescriptionData._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(appointNurse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            icon: 'success',
            title: 'The Nurse has been successfully appointed!',
            showConfirmButton: false,
            timer: 2000
          });
          if (Swal) {
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
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

  const handleNurseTime = e => {
    const time = e.target.value;
    const filterNurseTime = allNurse?.data?.filter(
      (nurses) => nurses?.time === time
    );
    setNurseTime(filterNurseTime);
  };
  const handleNurseDay = e => {
    const day = e.target.value;
    const filterNurseDay = nurseTime?.filter(
      (nurses) => nurses?.day === day
    );
    setNurseDay(filterNurseDay);
  };

  const handleNurseName = e => {
    const name = e.target.value;

    const filterNurseName = nurseDay?.find(
      (nurse) => nurse?.name === name);
    setNurseName(filterNurseName);
  };


  return (
    <div style={{ backgroundColor: "#F4F7F6", padding: "20px" }} className="borderSetup">
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

          {!singlePrescriptionData ?
            <Button type="submit" className="doctor-delete me-3" data-bs-toggle="tooltip" title="Only press this button after writing the prescription for the first time" >
              Add Prescription <MdSend />
            </Button>
            :
            <Button onClick={updatePrescription} className="doctor-update" data-bs-toggle="tooltip" title="Press this button to update the prescription each time" >
              Update Prescription <MdSend />
            </Button>}

          <NavLink to={`/dashboard/patients/medicalTest/${singlePrescriptionData?._id}`}>
            <Button type="submit" className="doctor-delete ms-3" data-bs-toggle="tooltip" title="Press this button to take medical test" >
              Medical Test
            </Button>
          </NavLink>

        </Form>
      </Card>


      <Card className="shadow p-3 mt-5">
        <h4 className="mb-5">Appoint Nurse</h4>
        <Form onSubmit={updatePrescription}>
          <div className='row'>
            <h5 className="mb-3">Patient Details</h5>
            <hr />
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <p><b>Patient Name:</b> {singlePrescriptionData?.patientFirstName} {singlePrescriptionData?.patientLastName}</p>
                <p><b>Patient Age:</b> {singlePrescriptionData?.patientAge}</p>
                <p><b>Patient Gender:</b> {singlePrescriptionData?.patientGender}</p>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-8">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Number of Medicine</th>
                      <th>Medicine Name and Power</th>
                      <th>Feeding System</th>
                    </tr>
                  </thead>
                  <tbody>
                    {singlePrescriptionData?.inputFields?.map((singleData, index) => (
                      <tr key={index}>
                        <td>{singleData?.number}</td>
                        <td>{singleData?.medicineName}</td>
                        <td>{singleData?.feedingSystem}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                {singlePrescriptionData?.medicalTest &&
                  <Table className="mt-3" responsive>
                    <thead>
                      <tr>
                        <th>Serial no.</th>
                        <th>Medical Test Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {singlePrescriptionData?.medicalTest?.map((test, index) => (
                        <tr key={index}>
                          <td>{test?.number}</td>
                          <td>{test?.medicalTestName}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>}
              </div>
            </div>
          </div>
          <h5 className="mt-5 mb-3">Nurse Details</h5>
          <hr style={{ borderTop: "1px solid black" }} />
          <div className='row'>
            {

            }
            <Form.Group className="col-12 col-md-2 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time</Form.Label>
              <Form.Select
                defaultValue={nurseName?.time}
                onBlur={handleNurseTime}
                aria-label="Default select example"
              >
                <option>- Select -</option>
                <option>7.00 am - 3.00 pm</option>
                <option>3.00 pm - 10.00 pm</option>
                <option>10.00 pm - 7.00 am</option>

              </Form.Select>
            </Form.Group>

            <Form.Group className="col-12 col-md-2 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Day</Form.Label>
              <Form.Select
                type="text"
                name="day"
                onBlur={handleNurseDay}
                aria-label="Default select example"
              >
                <option>- Select -</option>
                <option>Monday - Friday</option>
                <option>Friday - Monday</option>
                <option>Sunday - Thrusday</option>

              </Form.Select>
            </Form.Group>

            <Form.Group className="col-12 col-md-4 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nurse Name</Form.Label>
              <Form.Select
                onChange={handleNurseName}
                aria-label="Default select example"
              >
                <option>Select</option>
                {
                  nurseDay?.map(singleNurse =>
                    <option key={singleNurse?._id} value={singleNurse?.name}>{singleNurse?.name}</option>
                  )
                }
              </Form.Select>
            </Form.Group>

            <Form.Group className="col-12 col-md-2 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Appoint Date</Form.Label>
              <Form.Control
                defaultValue={today}
                type="email"
                placeholder="Patient Gender"
              />
            </Form.Group>

          </div>
          <Button onClick={handleAppointNurse} className="doctor-update">Appoint Nurse</Button>
        </Form>
      </Card>




    </div >
  );
};

export default PatientPrescription;

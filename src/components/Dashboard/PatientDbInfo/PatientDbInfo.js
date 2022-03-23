import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const PatientDbInfo = () => {
  const [patientDbInfoo, setpatientDbInfoo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7050/patients`)
      .then((res) => res.json())
      .then((data) => setpatientDbInfoo(data));
  }, []);

  return (
    <div className="mt-3">
      <h2 className="pb-3">Patient Status</h2>
      <div className="request-history">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Patients</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Appointment Date</th>
              <th>Problem</th>
              <th>Shift</th>
              <th>Doctor Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patientDbInfoo?.map((patientdata) => (
              <tr>
                <td>{patientdata?.firstName}</td>
                <td>{patientdata?.age}</td>
                <td>{patientdata?.gender}</td>
                <td>{patientdata?.date}</td>
                <td>{patientdata?.details}</td>
                <td>{patientdata?.shift}</td>
                <td>{patientdata?.doctor}</td>
                <td>{patientdata?.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PatientDbInfo;

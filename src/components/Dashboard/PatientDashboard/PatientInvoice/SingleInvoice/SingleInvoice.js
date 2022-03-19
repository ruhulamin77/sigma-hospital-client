import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Card, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import { HiLocationMarker, HiMail, HiPhoneMissedCall } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useGetPrescriptionsQuery } from "../../../../../features/sigmaApi";

const SingleInvoice = () => {
  const { id } = useParams();
  const allPrescription = useGetPrescriptionsQuery();
  const [singlePatientData, setSinglePatientData] = useState([]);
  console.log(singlePatientData);

  useEffect(() => {
    const singlePatient = allPrescription?.data?.find(singlePrec => singlePrec?._id === id);
    setSinglePatientData(singlePatient);
  }, [allPrescription?.data, id]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="p-3">
      <Card ref={componentRef} style={{ backgroundColor: "#C3D4F6" }} className="mt-3">
        <div className='p-5'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
              <img className="w-25" src="https://i.ibb.co/hRX83Sc/logo.png" alt="SigmaCareLogo" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
              <h6>Sigma Care Hospial</h6>
              <p><HiLocationMarker className='me-2' />1234 North Avenue Luke, South Bend, IN 360001</p>
              <p><HiPhoneMissedCall className='me-2' />+8801629094984</p>
              <p><HiMail className='me-2' />support@gmail.com</p>
            </div>
          </div>
          <div style={{ marginTop: "3rem" }} className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
              <h6>Doctor Name</h6>
              <p>{singlePatientData?.doctorName}</p>
              <h6 className='mt-3'>Patient Details</h6>
              <p>{singlePatientData?.patientFirstName} {singlePatientData?.patientLastName}</p>
              <p>Gender: {singlePatientData?.patientGender}</p>
              <p>Age: {singlePatientData?.patientAge}</p>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
              <h6>Invoice number</h6>
              <p>{singlePatientData?._id}</p>
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Table responsive>
              <thead>
                <tr>
                  <th>Number of Medicine</th>
                  <th>Medicine Name and Power</th>
                  <th>Feeding System</th>
                </tr>
              </thead>
              <tbody>
                {singlePatientData?.inputFields?.map((singleData, index) => (
                  <tr key={index}>
                    <td>{singleData?.number}</td>
                    <td>{singleData?.medicineName}</td>
                    <td>{singleData?.feedingSystem}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Card>

      {singlePatientData &&
        <Button onClick={handlePrint} className="d-flex mx-auto mt-2" variant="outline-dark">Download invoice</Button>
      }
    </div>
  );
};

export default SingleInvoice;
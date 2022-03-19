import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
// import { useGetBloodRequestQuery } from "../../../features/sigmaApi";
import SingleRequest from "./SingleRequest/SingleRequest";

import { useSelector } from "react-redux";
const BloodRequestHistory = () => {
  const [requests, setRequests] = useState([]);
  const user = useSelector((state) => state.auth.auth);

  useEffect(() => {
    fetch(
      `https://shrouded-headland-44423.herokuapp.com/bloodRequest/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [requests]);

  // if (!requests.length) {
  //   return (
  //     <button className="btn btn-danger spner-btn" type="button" disabled>
  //       <span
  //         className="spinner-border spinner-border-sm"
  //         role="status"
  //         aria-hidden="true"
  //       ></span>
  //       Loading...
  //     </button>
  //   );
  // }

  return (
    <div className="request-history-container">
      <h2>My Request History</h2>
      <div className="request-history">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Patient Age</th>
              <th>Reason</th>
              <th>Quantity</th>
              <th>Doctor Name</th>
              <th>Needed Date</th>
              <th>Blood Group</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <SingleRequest
                key={request._id}
                request={request}
              ></SingleRequest>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BloodRequestHistory;

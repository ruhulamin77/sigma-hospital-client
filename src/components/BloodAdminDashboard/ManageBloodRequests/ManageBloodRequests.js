import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './ManageBloodRequests.css';

const ManageBloodRequests = () => {
  const [bloodrequest, setBloodrequest] = useState([]);
  // https://sigma-hospital-server.onrender.com/

  useEffect(() => {
    fetch('https://sigma-hospital-server.onrender.com/bloodRequest')
      .then((res) => res.json())
      .then((data) => {
        setBloodrequest(data);
      });
  }, [bloodrequest]);
  // update approved status
  const handleApproved = (id) => {
    axios
      .put(`https://sigma-hospital-server.onrender.com/bloodRequest/${id}`, {
        status: 'Approved',
      })
      .then((res) => {
        console.log(res);
        if (res.data.matchedCount > 0) {
          Swal.fire('Approved!', 'Donar request has been Approved.', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // // update rejected status
  const handleRejected = (id) => {
    axios
      .put(`https://sigma-hospital-server.onrender.com/bloodRequest/${id}`, {
        status: 'Rejected',
      })
      .then((res) => {
        console.log(res);
        if (res.data.matchedCount > 0) {
          Swal.fire('Rejected!', 'Donar request has been Rejected.', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!bloodrequest?.length) {
    return (
      <button class="btn btn-primary spner-btn" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    );
  }

  return (
    <div>
      <div>
        <h4 className="donor-details mt-3">Blood Requests</h4>
        <div className="pt-3">
          <Table striped responsive size="sm" brequestblooded hover>
            <thead>
              <tr className="t-head">
                <th>Sl</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>B. Group</th>
                <th>Address</th>
                <th>Reason</th>
                {/* <th>Doctor Name</th> */}
                <th>Mobile</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bloodrequest?.map((requestblood, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{requestblood?.name}</td>
                  <td>{requestblood?.age}</td>
                  <td>{requestblood?.gender}</td>
                  <td>{requestblood?.bloodGroup}</td>
                  <td>{requestblood?.address}</td>
                  <td>{requestblood?.reason}</td>
                  {/* <td>{requestblood?.doctorName}</td> */}
                  <td>{requestblood?.mobile}</td>
                  <td>{requestblood?.requestDate}</td>
                  <td>{requestblood?.quantity}</td>
                  <td>{requestblood?.status}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success mx-1"
                      onClick={() => handleApproved(requestblood._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRejected(requestblood._id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageBloodRequests;

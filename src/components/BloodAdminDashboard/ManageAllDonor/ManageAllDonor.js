import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './ManageAllDonor.css';
const ManageAllDonor = () => {
  const [donorslist, setDonorslist] = useState([]);
  // https://sigma-hospital-server.onrender.com/

  useEffect(() => {
    fetch('https://sigma-hospital-server.onrender.com/donors')
      .then((res) => res.json())
      .then((data) => setDonorslist(data));
  }, [donorslist]);

  if (!donorslist?.length) {
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

  // update approved status
  const handleApprovedStatus = (id) => {
    console.log(id);
    axios
      .put(`https://sigma-hospital-server.onrender.com/donors/${id}`, {
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

  // update rejected status
  const handleRejectedStatus = (id) => {
    axios
      .put(`https://sigma-hospital-server.onrender.com/donors/${id}`, {
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
  return (
    <div>
      <h4 className="donor-details mt-3">DONOR DETAILS</h4>
      <div className="pt-3">
        <Table striped responsive size="sm" bdonorslisted hover>
          <thead>
            <tr className="t-head">
              <th>Sl</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>B. Group</th>
              <th>Disease</th>
              <th>L.D.Date</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {donorslist?.map((donorslist, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{donorslist?.name}</td>
                <td>{donorslist?.age}</td>
                <td>{donorslist?.gender}</td>
                <td>{donorslist?.bloodGroup}</td>
                <td>{donorslist?.disease}</td>
                <td>{donorslist?.lastDonateDate}</td>
                <td>{donorslist?.address}</td>
                <td>{donorslist?.mobile}</td>
                <td>{donorslist?.status}</td>
                <td>
                  <button
                    className="btn btn-sm btn-success mx-1"
                    onClick={() => handleApprovedStatus(donorslist._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRejectedStatus(donorslist._id)}
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
  );
};

export default ManageAllDonor;

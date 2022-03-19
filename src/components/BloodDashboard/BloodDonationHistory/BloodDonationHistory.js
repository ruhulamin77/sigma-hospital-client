import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SingleDonation from "./SingleDonation/SingleDonation";
import "./BloodDonationHistory.css";
import { useSelector } from "react-redux";
const BloodDonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const user = useSelector((state) => state.auth.auth);

  useEffect(() => {
    fetch(
      `https://shrouded-headland-44423.herokuapp.com/bloodDonation/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  // if (!donations.length) {
  //   return (
  //     <button class="btn btn-primary spner-btn" type="button" disabled>
  //       <span
  //         class="spinner-border spinner-border-sm"
  //         role="status"
  //         aria-hidden="true"
  //       ></span>
  //       Loading...
  //     </button>
  //   );
  // }

  return (
    <div className="donation-history-container">
      <h2>My Donation History</h2>
      <div className="donation-history">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Disease (if any)</th>
              <th>Donate Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <SingleDonation
                key={donation._id}
                donation={donation}
              ></SingleDonation>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BloodDonationHistory;

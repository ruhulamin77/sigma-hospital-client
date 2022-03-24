import React, { useEffect, useState } from "react";
import Charts from "../Charts/Charts";

const BloodAdminHome = () => {
  const [donors, setDonors] = useState([]);
  const [approvedDonation, setApproveDonation] = useState([]);
  const [pendingDonation, setPendingDonation] = useState([]);
  const [rejectedDonation, setRejectedDonation] = useState([]);
  const [totalBloodRequest, setTotalBloodrequest] = useState([]);
  const [approvedBloodRequest, setApprovedBloodRequest] = useState([]);
  const [pendingBloodRequest, setPendingBloodRequest] = useState([]);
  const [rejectedBloodRequest, setReectedBloodRequest] = useState([]);

  // http://localhost:7050/

  useEffect(() => {
    fetch("http://localhost:7050/bloodDonation")
      .then((res) => res.json())
      .then((data) => {
        const ApprovedDonation = data.filter(
          (data) => data?.status === "Approved"
        );
        const pendingDonation = data.filter(
          (data) => data?.status === "Pending"
        );
        const RejectedDonation = data.filter(
          (data) => data?.status === "Rejected"
        );
        setApproveDonation(ApprovedDonation);
        setPendingDonation(pendingDonation);
        setRejectedDonation(RejectedDonation);
        setDonors(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:7050/bloodRequest")
      .then((res) => res.json())
      .then((data) => {
        const AproveBloodRequest = data.filter(
          (data) => data?.status === "Approved"
        );
        const pendingBloodRequest = data.filter(
          (data) => data?.status === "Pending"
        );
        const rejectedBloodRequest = data.filter(
          (data) => data?.status === "Rejected"
        );
        setApprovedBloodRequest(AproveBloodRequest);
        setPendingBloodRequest(pendingBloodRequest);
        setReectedBloodRequest(rejectedBloodRequest);
        setTotalBloodrequest(data);
      });
  }, []);
  return (
    <div className="p-3">
      <Charts />
      <div>
        <h3 className=" mb-3 mt-3 subro">Total Donor Data</h3>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i class="fas fa-users"></i>
              </p>
              <p className="total">Total Donors</p>
              <p className="count">{donors.length}</p>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i class="fas fa-users"></i>
              </p>
              <p className="total">Total Pending</p>
              <p className="count">{pendingDonation.length}</p>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i class="fas fa-users"></i>
              </p>
              <p className="total">Total Approved</p>
              <p className="count">{approvedDonation.length}</p>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i class="fas fa-users"></i>
              </p>
              <p className="total">Total Rejected</p>
              <p className="count">{rejectedDonation.length}</p>
            </div>
          </div>
        </div>

        {/************************************************************ */}
        <div>
          <h3 className=" mb-3 mt-5 subro">Total Blood Requests Data</h3>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i class="fas fa-spinner"></i>
                </p>
                <p className="total">Total Requests</p>
                <p className="count">{totalBloodRequest.length}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i class="far fa-check-circle"></i>
                </p>
                <p className="total">Pending Requests</p>
                <p className="count">{pendingBloodRequest.length}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i class="far fa-check-circle"></i>
                </p>
                <p className="total">Approved Requests</p>
                <p className="count">{approvedBloodRequest?.length}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i class="fas fa-burn "></i>
                </p>
                <p className="total">Total Rejected</p>
                <p className="count">{rejectedBloodRequest.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodAdminHome;

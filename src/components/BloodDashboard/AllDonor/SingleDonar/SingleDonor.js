import React from "react";
import { Card } from "react-bootstrap";
import DonorModal from "../DonorModal/DonorModal";
import "./SingleDonor.css";

const SingleDonor = (props) => {
  const { name, gender, bloodGroup, address } = props.donordata;

  return (
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <Card>
        <Card.Header>
          {gender === "Male" ? (
            <i class="fas fa-user user-icon"></i>
          ) : (
            <i class="fas fa-female user-icon"></i>
          )}
          <small className="name-donor">{name}</small>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-titels">
            Blood Group <strong className="blood-grp">{bloodGroup}</strong>
          </Card.Title>
          <p>Address : {address}</p>
          <Card.Text>
            <DonorModal donar={props.donordata}></DonorModal>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleDonor;

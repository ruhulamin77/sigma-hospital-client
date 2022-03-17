import React, { useEffect, useState } from "react";

const SingleDonation = (props) => {
  const { name, age, bloodGroup, disease, lastDonateDate, status } =
    props.donation;

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{bloodGroup}</td>
      <td>{disease}</td>
      <td>{lastDonateDate}</td>
      <td>{status}</td>
    </tr>
  );
};

export default SingleDonation;

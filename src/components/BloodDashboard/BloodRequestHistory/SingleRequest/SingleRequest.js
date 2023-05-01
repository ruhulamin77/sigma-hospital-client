const SingleRequest = (props) => {
  const {
    name,
    age,
    bloodGroup,
    reason,
    doctorName,
    neededDate,
    status,
    quantity,
    address,
  } = props.request;

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{reason}</td>
      <td>{quantity}</td>
      <td>{doctorName}</td>
      <td>{neededDate}</td>
      <td>{bloodGroup}</td>
      <td>{address}</td>
      <td>{status}</td>
    </tr>
  );
};

export default SingleRequest;

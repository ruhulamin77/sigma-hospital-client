import React from "react";
import { Button, Modal } from "react-bootstrap";
import PaymentForm from "../Share/Payment/PaymentForm/PaymentForm";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          For Online Checkup! Fillup this form and Pay for Checkup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PaymentForm />
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

function OnlineDoctor() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Get Instant Support
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default OnlineDoctor;
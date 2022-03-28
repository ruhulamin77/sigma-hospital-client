import React from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../Share/Header/Header';
import './OnlineDoctor.css'

const OnlineDoctor = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const handleCall = () => {
    window.location.replace("https://meet.google.com/fax-csgi-vbh")
  }
  const {
    register,
    handleSubmit,

  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='model-header'>
            <img src="https://i.ibb.co/hRX83Sc/logo.png" className='image-online-logo' alt="" /> Central Hospital
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className='thank-you-msg'>Thanks For Joining With US</h3>
          <h6 className='model-pt-2'>
            This is our Online Doctor Checkup section. Here a specialist waiting to serve your's need. So, See the below Call section and get connect with our Experienced Doctor
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button className='call-btn' onClick={handleCall}>Call</Button>
          <Button className='Close-btn' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Header />
      <div className="appointment_container mt-5">
        <div className="container ">
          <h4 className="appointment mb-4">Online Checkup Form</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="gy-4">
              <div className="col-md-6 col-lg-5">
                <input
                  type="text"
                  placeholder="First name"
                  {...register("firstName", { required: true, maxLength: 80 })}
                  className="input-field-name"
                />
              </div>
              <div className="col-md-6 col-lg-5 ">
                <input
                  type="text"
                  placeholder="Last name"
                  {...register("lastName", { required: true, maxLength: 100 })}
                  className="input-field-name"
                />{" "}
              </div>
              <div className="col-md-6 col-lg-2">
                <input
                  type="number"
                  placeholder="Age"
                  {...register("Age", { required: true })}
                  className="service-doctor-shift"
                />
              </div>
              <div className="col-md-6 col-lg-2">
                <select
                  aria-label="Default select example"
                  {...register("gender", { required: true })}
                  className="service-doctor"
                >
                  <option>- Gender -</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-5">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("patientEmail", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="service-doctor-shift"
                />
              </div>
              <div className="col-lg-5 col-md-6">
                <input
                  type="tel"
                  placeholder="Mobile number"
                  {...register("mobileNumber", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                  className="service-doctor-shift"
                />{" "}
              </div>
              <Button onClick={() => setModalShow(true)} className="mpdel-button-btn">
                Submit
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Row>
          </form>
        </div>
      </div>
    </>
  );
};

export default OnlineDoctor;
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { adminRegister } from "../../../features/adminSlice";
import "./CreateAdmin.css";
import Header from "../../Share/Header/Header";

const CreateAdmin = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    dispatch(adminRegister(data));
  };
  return (
    <>
      <Container>
        <Row>
          <div class="one">
            <h1 className="text-center mb-4">Add A Admin Panel Member</h1>
          </div>
          <Col>
            <div className="img-login">
              <img
                className="img-fluid"
                src="https://img.freepik.com/free-vector/online-registration-sign-up-concept-with-woman-character_268404-99.jpg?w=1380"
                alt=""
              />
            </div>
          </Col>
          <Col lg={6} md={6} xs={12} sm={12}>
            <form className="createAdmin" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Admin Name"
                {...register("adminName", { required: true })}
              />
              <input
                type="email"
                placeholder="Admin Email"
                {...register("email", { required: true })}
              />
              <select {...register("role", { required: true })}>
                <option>Select One</option>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Nurse</option>
                <option value="pharma">Pharma</option>
                <option value="recip">Reception</option>
              </select>
              <input
                type="password"
                placeholder="Admin Password"
                {...register("passWord", { required: true })}
              />
              <input
                type="text"
                placeholder="Avatar URL"
                {...register("photoURL", {})}
              />
              <button className="custom-btn btn-9 mt-4" type="submit">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateAdmin;

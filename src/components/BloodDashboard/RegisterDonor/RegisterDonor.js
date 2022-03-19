import React, { useEffect, useState } from "react";
import "./RegisterDonor.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";

const RegisterDonor = () => {
  const user = useSelector((state) => state.auth.auth);

  const { register, handleSubmit, reset } = useForm();
  const [donars, setDonars] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-headland-44423.herokuapp.com/donors").then((res) =>
      res.json().then((data) => setDonars(data))
    );
  }, []);

  const onSubmit = (data) => {
    data.status = `Pending`;
    data.email = user?.email;
    if (
      donars.find(
        (donar) =>
          donar.email === data.email &&
          (data.status === "Pending" || "Approved" || "Rejected")
      )
    ) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "You are already registered as a donar",
        showConfirmButton: true,
      });
    }
    axios
      .post("https://shrouded-headland-44423.herokuapp.com/donors", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your kindness",
            showConfirmButton: true,
          });

          reset();
        }
      });
  };
  return (
    <div className="register-donor-form-container ">
      <h2 className="m-3">Register as a Donar ! </h2>
      <h5 className="pb-3">
        "There is a hope of life to someone in your blood donation"
      </h5>
      <div className="register-donor-form">
        {/* <h5 className="mb-5">Please give your details to donate blood</h5> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <div className="col-md-6 col-lg-4 ">
              <input
                placeholder="Your Name"
                defaultValue={user?.displayName}
                {...register("name", { required: true, maxLength: 20 })}
              />
            </div>
            {/* <div className="col-md-6 col-lg-4 ">
              <input
                placeholder="Your Email"
                defaultValue={user?.email}
                disabled
                {...register("email", { required: true, maxLength: 20 })}
              />
            </div> */}
            <div className="col-md-6 col-lg-4">
              <input
                placeholder="Your Age (18-60 only)"
                type="number"
                min="18"
                max="60"
                {...register("age", { min: 18, required: true })}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <select {...register("gender", { required: true })}>
                <option value="" disabled selected hidden>
                  Gender
                </option>
                <option defaultValue="male">Male</option>
                <option defaultValue="female">Female</option>
                <option defaultValue="other">Other</option>
              </select>
            </div>

            <div className="col-md-6 col-lg-4">
              <select {...register("bloodGroup", { required: true })}>
                <option defaultValue="" disabled selected hidden>
                  Select Your Blood Group
                </option>
                <option defaultValue="a+">A+</option>
                <option defaultValue="b+">B+</option>
                <option defaultValue="o+">O+</option>
                <option defaultValue="ab+">AB+</option>
                <option defaultValue="a-">A-</option>
                <option defaultValue="b-">B-</option>
                <option defaultValue="o-">O-</option>
                <option defaultValue="ab-">AB-</option>
              </select>
            </div>

            <div className="col-md-6 col-lg-4">
              <input
                placeholder="Mobile Number"
                {...register("mobile", { required: true })}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <input
                placeholder="Address"
                {...register("address", { required: true })}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <input
                placeholder="Disease (if any, oterwise type 'no')"
                {...register("disease", { required: true })}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <input
                id="donate_date"
                type="date"
                placeholder="Last donate date"
                {...register("lastDonateDate", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
            <div></div>

            <div className="col-md-6 col-lg-4">
              <button className="btn btn-danger mt-4" type="submit">
                Submit <i className="fas fa-tint"></i>
              </button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default RegisterDonor;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "./BloodDonation.css";

const BloodDonation = () => {
  const { register, handleSubmit, reset } = useForm();
  const [bloods, setBloods] = useState([]);
  const user = useSelector((state) => state.auth.value);

  useEffect(() => {
    fetch("http://localhost:7050/bloodDonation").then((res) =>
      res.json().then((data) => setBloods(data))
    );
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    data.status = `Pending`;
    data.email = user?.email;
    // if (donars.map((donar) => donar.email === user.email)) {
    //   return Swal.fire({
    //     position: "center",
    //     icon: "error",
    //     title: "You are already registered as a donar",
    //     showConfirmButton: true,
    //   });
    // }
    axios.post("http://localhost:7050/bloodDonation", data).then((res) => {
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
    <div className="blood-donation-form-container">
      <h2 className="m-3">Donate Blood Save Life !</h2>
      <div className="blood-donation-form">
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
            <div className="col-md-6 col-lg-4 ">
              <input
                placeholder="Your Age (18-60 only)"
                type="number"
                min="18"
                max="60"
                {...register("age", { min: 18, required: true })}
              />
            </div>
            <div className="col-md-6 col-lg-4 ">
              <select {...register("gender", { required: true })}>
                <option value="" disabled selected hidden>
                  Gender
                </option>
                <option defaultValue="male">Male</option>
                <option defaultValue="female">Female</option>
                <option defaultValue="other">Other</option>
              </select>
            </div>

            <div className="col-md-6 col-lg-4 ">
              <select {...register("bloodGroup", { required: true })}>
                <option defaultValue="" disabled selected hidden>
                  Blood Group
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
            <div className="col-md-6 col-lg-4 ">
              <input
                placeholder="Mobile Number"
                {...register("mobile", { required: true })}
              />
            </div>
            <div className="col-md-6 col-lg-4 ">
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

            <div className="col-md-6 col-lg-4 ">
              <input
                type="date"
                placeholder="Last donate date"
                {...register("lastDonateDate", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
            <div></div>
            <div className="col-md-6 col-lg-4 ">
              <button className="btn btn-danger mt-4" type="submit">
                Donate Blood <i className="fas fa-tint"></i>
              </button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default BloodDonation;

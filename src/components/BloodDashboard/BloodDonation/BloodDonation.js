import React, { useEffect, useState } from "react";
import "./BloodDonation.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";

const BloodDonation = () => {
  const user = useSelector((state) => state.auth.value);

  const { register, handleSubmit, reset } = useForm();
  const [donars, setDonars] = useState([]);

  useEffect(() => {
    fetch("https://hidden-coast-99117.herokuapp.com/donateBlood").then((res) =>
      res.json().then((data) => setDonars(data))
    );
  }, []);

  const onSubmit = (data) => {
    data.status = `Pending`;
    data.email = user.email;
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
      .post("https://hidden-coast-99117.herokuapp.com/donateBlood", data)
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
    <div className="donate-blood-form-container ">
      <h2 className="m-3">Be a Donar ! </h2>
      <h5 className="pb-3">
        "There is a hope of life to someone in your blood donation"
      </h5>
      <div className="donate-blood-form">
        {/* <h5 className="mb-5">Please give your details to donate blood</h5> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your Name"
            defaultValue={user?.displayName}
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="Your Age (18-60 only)"
            type="number"
            min="18"
            max="60"
            {...register("age", { min: 18, required: true })}
          />
          <select {...register("gender", { required: true })}>
            <option value="" disabled selected hidden>
              Gender
            </option>
            <option defaultValue="male">Male</option>
            <option defaultValue="female">Female</option>
            <option defaultValue="other">Other</option>
          </select>

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
          <input
            placeholder="Mobile Number"
            {...register("mobile", { required: true })}
          />
          <input
            placeholder="Address"
            {...register("address", { required: true })}
          />

          <input
            placeholder="Disease (if any, oterwise type 'no')"
            {...register("disease", { required: true })}
          />
          <label> &nbsp; Last donate date:</label>
          <input
            type="date"
            placeholder="Last donate date"
            {...register("lastDonateDate", { required: true, maxLength: 20 })}
          />

          <button className="btn btn-danger mt-4" type="submit">
            Submit <i className="fas fa-tint"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BloodDonation;

import axios from "axios";
import React from "react";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "./BloodRequest.css";

const BloodRequest = () => {
  const user = useSelector((state) => state.auth.auth);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = `Pending`;
    console.log(data);
    axios.post("https://shrouded-headland-44423.herokuapp.com/bloodRequest", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your request has been submitted",
          showConfirmButton: true,
        });

        reset();
      }
    });
  };
  return (
    <div className="request-blood-form-container ">
      <h2 className="m-3">Send a blood request</h2>
      <div className="request-blood-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <div className="col-md-6 col-lg-4">
              <input
                placeholder="Patient Name"
                {...register("name", { required: true, maxLength: 20 })}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <input
                placeholder="Patient Age"
                type="number"
                min="0"
                {...register("age")}
              />
            </div>
            <div className="col-md-6 col-lg-2">
              <select {...register("gender", { required: true })}>
                <option value="" disabled selected hidden>
                  Gender
                </option>
                <option defaultValue="male">Male</option>
                <option defaultValue="female">Female</option>
                <option defaultValue="other">Other</option>
              </select>
            </div>

            <div className="col-md-6 col-lg-2">
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
            <div className="col-md-6 col-lg-3">
              <input
                placeholder="Quantity (Bags)"
                type="number"
                min="1"
                {...register("quantity", { required: true })}
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <input
                placeholder="Address"
                {...register("address", { required: true })}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <input
                placeholder="Mobile Number"
                {...register("mobile", { required: true })}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <input
                placeholder="Reason"
                {...register("reason", { required: false, maxLength: 20 })}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <input
                placeholder="Doctor's Name"
                {...register("doctorName", { required: false, maxLength: 20 })}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <input
                type="date"
                placeholder="Needed Date:"
                id="needed-date"
                {...register("neededDate", { required: true, maxLength: 20 })}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <button className="btn btn-danger mt-4" type="submit">
                Send Request <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default BloodRequest;

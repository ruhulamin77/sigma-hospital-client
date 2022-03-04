import axios from "axios";

import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Appointment.css";

const Appointment = () => {
  const [doctors, setDoctor] = useState([]);
  const [Specialist, setSpecialist] = useState([]);
  const [shiftDoctor, setShiftDoctor] = useState([]);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-headland-44423.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => {
        // setShiftDoctor(data);
        setDoctor(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:7050/appointments", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(appointments),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.insertedId) {
  //         Swal.fire(
  //           "Good job!",
  //           "A doctor has been successfully added!",
  //           "success"
  //         );
  //       }
  //     });
  // }, []);

  const onSubmit = (data) => {
    axios
      .post("https://shrouded-headland-44423.herokuapp.com/appointments", data)
      .then((res) => {
        if (res.data.insertedId) {
          // successfull modal

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your appointment has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  const {
    register,
    handleSubmit,
    reset,
    /* formState: { errors }, */
  } = useForm();

  const handleOnBlurService = (e) => {
    console.log(e.target.value);
    const filteredDoctor = doctors.filter(
      (doctor) => doctor?.speciality === e.target.value
    );
    setSpecialist(filteredDoctor);
    console.log(filteredDoctor);
  };

  const handleOnBlurShift = (e) => {
    console.log(e.target.value);
    const filteredDoctor = Specialist.filter(
      (doctors) => doctors?.shift === e.target.value
    );
    setShiftDoctor(filteredDoctor);
    console.log(filteredDoctor);
  };

  return (
    <div>
      <div className="container">
        <h4 className="appointment mb-4">Book Appointment</h4>
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
                {...register("email", {
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

            <div className="col-md-6 col-lg-3">
              <select
                aria-label="Default select example"
                {...register("service")}
                onBlur={handleOnBlurService}
                className="service-doctor"
              >
                <option>- Specialist -</option>
                {/* {doctors.map((doctor) => (
                  <option value={doctor.speciality}>{doctor.speciality}</option>
                ))} */}
                <option value="Oncologist">Oncologist</option>
                <option value="ENT Specialist">ENT Specialist</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Audiologist">Audiologist</option>
                <option value="Psychiatrists">Psychiatrists</option>
                <option value="Gynecologist">Gynecologist</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-3">
              <select
                aria-label="Default select example"
                {...register("shift", { required: true })}
                onBlur={handleOnBlurShift}
                className="service-doctor"
              >
                <option>- Shift -</option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
            </div>

            <div className="col-md-6 col-lg-3">
              <select
                aria-label="Default select example"
                {...register("doctor", { required: true })}
                className="service-doctor"
              >
                <option>- Doctor -</option>
                {shiftDoctor.map((doctor) => (
                  <option>{doctor.name}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6 col-lg-3">
              <input
                type="date"
                {...register("date", { required: true })}
                className="service-doctor-shift"
              />
            </div>

            <div className="col-md-12">
              <textarea
                placeholder="Please type what you want..."
                rows="5"
                {...register("description", { required: true })}
                className="description-box"
              ></textarea>{" "}
            </div>
            <button type="submit" className="pulse">
              {" "}
              Submit{" "}
            </button>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Appointment;

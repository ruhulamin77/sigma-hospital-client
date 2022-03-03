import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Appointment.css";

const Appointment = () => {
  const [doctor, setDoctor] = useState([]);
  const [shiftDoctor, setShiftDoctor] = useState([]);
  console.log(shiftDoctor)

  useEffect(() => {
    fetch("https://shrouded-headland-44423.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => {
        setShiftDoctor(data);
        setDoctor(data);
      });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    /* formState: { errors }, */
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset();
  };

  const handalonblure = (e) => {
    const seacredoctor = doctor.filter(
      (doctors) => doctors?.shift === e.target.value
    );
    setShiftDoctor(seacredoctor);
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
                {...register("First-name", { required: true, maxLength: 80 })}
                className="input-field-name"
              />
            </div>
            <div className="col-md-6 col-lg-5 ">
              <input
                type="text"
                placeholder="Last name"
                {...register("Last-name", { required: true, maxLength: 100 })}
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
                {...register("Gender", { required: true })}
                className="service-doctor"
              >
                <option>- Gender -</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-5">
              <input
                type="email"
                placeholder="Email"
                {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                className="service-doctor-shift"
              />
            </div>
            <div className="col-lg-5 col-md-6"><input
              type="tel"
              placeholder="Mobile number"
              {...register("Mobile-number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
              className="service-doctor-shift"
            />{" "}</div>

            <div className="col-md-6 col-lg-3">
              <select
                aria-label="Default select example"
                {...register("Service",)}
                className="service-doctor"
              >
                <option>- Service -</option>
                {/* {
                            doctor.map(doctor => <option>{doctor.time}</option>)

                        } */}
              </select>
            </div>
            <div className="col-md-6 col-lg-3">
              <select
                aria-label="Default select example"
                {...register("Shift", { required: true })}
                onBlur={handalonblure}
                className="service-doctor"
              >
                <option>- Shift -</option>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </select>
            </div>

            <div className="col-md-6 col-lg-3">
              <select
                aria-label="Default select example"
                {...register("Doctor", { required: true })}
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
                {...register("Date", { required: true })}
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
            <button type="submit" className="pulse"> Submit </button>
          </Row>
        </form>

      </div>
    </div>
  );
};

export default Appointment;

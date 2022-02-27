import React from "react";
import "./Service.css";
import heart from "../../images/services/1.png";
import xray from "../../images/services/2.png";
import blood from "../../images/services/3.png";
import lab from "../../images/services/4.png";
import checkup from "../../images/services/5.png";
import ambulance from "../../images/services/6.png";
import navPic from "../../images/specialization/specialization_banner.jpg";
import { Link } from "react-router-dom";
import Testimonial from "../Home/Testimonial/Testimonial";

const Service = () => {
  return (
    <>
      <div
        style={{ background: `url(${navPic})` }}
        className="backcrumb-my mb-5"
      >
        <nav aria-label="breadcrumb">
          <h3>Service</h3>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <span className="sr-nav">&#62;</span>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/service">Service</Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container mt-5 pb-5 mb-2">
        <h6 className="text-center pt-3 sr">services</h6>
        <h1 className="text-center pt-3 kivi">
          SigmaCare <span>Medical Services</span>
        </h1>
        <p className="text-center pt-3 para mb-3">
          It is a long established fact that a reader will be distracted by the
          readable <br />
          content of a page when looking at its layout.
        </p>
        <div className="services">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src={heart} alt="" />
                </div>
                <h4 className="text-center">Health CheckUp</h4>
                <p className="para text-center">
                  A usual full-body health check-up is made up of blood and
                  urine tests lungs function tests, and cardiac test.
                </p>
                <button className="service-btn">
                  Appointment <i className="fas fa-plus btn-icon"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src={xray} alt="" />
                  <h4 className="text-center">X-Ray</h4>
                  <p className="para text-center">
                    An X-ray is an imaginaring test that produces pictures of
                    the organs, tissues, and bones of the body.
                  </p>
                  <button className="service-btn">
                    Appointment <i className="fas fa-plus btn-icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src={blood} alt="" />
                </div>
                <h4 className="text-center">Blood Bank</h4>
                <p className="para text-center">
                  Blood banking is the process that takes place in the lab to
                  make sure that donated blood, or blood products
                </p>
                <button className="service-btn">
                  Appointment <i className="fas fa-plus btn-icon"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src={lab} alt="" />
                </div>
                <h4 className="text-center">Laboratory</h4>
                <p className="para text-center">
                  Clinical lab services are tests on specimens from the body
                  that are used to diagnose and treat patients.
                </p>
                <button className="service-btn">
                  Appointment <i className="fas fa-plus btn-icon"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src={checkup} alt="" />
                </div>
                <h4 className="text-center">Outdoor Checkup</h4>
                <p className="para text-center">
                  Clinics / Hospitals of Outdoor Checkup Services, Emergency
                  Care Service, Postoperative Care Service.
                </p>
                <button className="service-btn">
                  Appointment <i className="fas fa-plus btn-icon"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src={ambulance} alt="" />
                </div>
                <h4 className="text-center">Ambulance</h4>
                <p className="para text-center">
                  Emergency ambulance services have dedicated staff to handle
                  medical conditions at any time anywhere.
                </p>
                <button className="service-btn">
                  Appointment <i className="fas fa-plus btn-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  );
};

export default Service;

import React from "react";
import "./Specialization.css";

import specializationOncologist from "../../images/blogs/blog-1.jpg";
import serviceLogo from "../../images/logo/logo1.png";
import { Link } from "react-router-dom";
import { Col, Container } from "react-bootstrap";

const Specialization = () => {
  return (
    <div className="specialization_container">
      <div className="specialization_banner">
        <h2>Oncologist</h2>
        <div className="specialization_navigation">
          <Link to="/">Home </Link>
          <span>&#62;</span>
          <Link to="/"> Oncologist</Link>
        </div>
      </div>
      <div className="container">
        <div className=" inner_specialization">
          <div className="specialization_left ">
            <div className="special_img">
              <img src={specializationOncologist} alt="" />
            </div>
          </div>
          <div className="specialization_right ">
            <div className="specialization_nav">
              <h3>Specialization</h3>
              <ul>
                <li>
                  <Link to="/">
                    <span>Oncologist</span>
                    <span className="fas fa-plus"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Neurologist</span>
                    <span className="fas fa-plus"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>ENT specialist</span>
                    <span className="fas fa-plus"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Cardiologist</span>
                    <span className="fas fa-plus"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Audiologist</span>
                    <span className="fas fa-plus"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Psychiatrists</span>
                    <span className="fas fa-plus"></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="specialization_timeTable">
              <i className="far fa-clock"></i>
              <h3>Opening Time</h3>
              <div className="special_time">
                <div>
                  <span>Monday – Friday</span> <span>6.00 – 7:00 pm</span>
                </div>
                <div>
                  <span>Saturday</span> <span>9.00 – 8.00 pm</span>
                </div>
                <div>
                  <span>Sunday</span> <span>10.00 – 9.00 pm</span>
                </div>
              </div>
            </div>
            <div className="specialization_services">
              <img src={serviceLogo} alt="" />
              <h3>SIgmacare Services</h3>
              <div className="special_address">
                <p>
                  <span>Call</span> : +123456789
                </p>
                <p>
                  <span>Mail</span> : support@example.com
                </p>
                <p>
                  <span>Address</span> : 1234 North Avenue Luke Lane, South
                  Bend, IN 360001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;

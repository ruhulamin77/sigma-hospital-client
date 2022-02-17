import React from "react";
import "./Specialization.css";

import specializationOncologist from "../../images/blogs/blog-1.jpg";
import serviceLogo from "../../images/logo/logo1.png";
import { Link } from "react-router-dom";

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
            <div className="department">
              <h5>DEPARTMENT</h5>
              <h2>
                <span>Oncologist</span> Treatments
              </h2>
              <p>
                A cardiologist is a doctor that deals with the cardiovascular
                system. This means he or she treats any abnormality in our blood
                vessels and heart. This can include heart disease or condition
                which requires diagnosis and treatment.
              </p>
            </div>
            <div className="special_services_point">
              <div className="services_point_left">
                <p>
                  <i className="fas fa-check"></i> Treats minor illnesses
                </p>
                <p>
                  <i className="fas fa-check"></i> Answers health questions
                </p>
                <p>
                  <i className="fas fa-check"></i> Conducts health checkups
                </p>
              </div>
              <div className="services_point_right">
                <p>
                  <i className="fas fa-check"></i> Specialty physicians
                </p>
                <p>
                  <i className="fas fa-check"></i> Performs routine health tests
                </p>
                <p>
                  <i className="fas fa-check"></i> List Items
                </p>
              </div>
            </div>
            {/* progress bar */}
            <div className="operation_progress_section">
              <div className="operation_done specialization_services">
                <h2>1000 +</h2>
                <h3>Operations done</h3>
                <p>
                  There is a lot to do in little time. But the stakes are high.
                </p>
              </div>
              <div className="operation_progress">
                <div>
                  <div className="progress_label">
                    <p>
                      Immunotherapy <span>91%</span>
                    </p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg_progress"
                      role="progressbar"
                      style={{ width: "91%" }}
                      aria-valuenow="91"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="pp"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="progress_label">
                    <p>
                      Hormone therapy <span>84%</span>
                    </p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg_progress"
                      role="progressbar"
                      style={{ width: "84%" }}
                      aria-valuenow="84"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="progress_label">
                    <p>
                      Targeted drug therapy <span>75%</span>
                    </p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg_progress"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tips_and_info">
              <div className="department">
                <h5>TIPS & INFO</h5>
                <h3>SigmaCare Tips for Healthy Children and Families</h3>
                <p>
                  Raising a family isn’t always easy. You are busy, and so are
                  your children. There is a lot to do in little time. But the
                  stakes are high. Today, many kids are overweight or obese. A
                  healthy, active lifestyle can help maintain weight. It also
                  can prevent health issues, such as diabetes, heart disease,
                  asthma, and high blood pressure.
                </p>
              </div>
            </div>
            <hr />
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
              <div className="special_social">
                <Link to="/">
                  <i className="fab fab fa-facebook"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;

import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/doc-img.png";
import signature from "../../../images/signature.png";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container>
      <div className="banner_container">
        <div className="banner_left ">
          <div className="banner_left_social">
            <ul>
              <li>
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="banner_left_bottom">
            <h4>TOP DOCTORS</h4>
            <h2>Make Your</h2>
            <p>Life Helthy</p>

            <button>
              Get Appointment <span>+</span>
            </button>
          </div>
        </div>

        <div className="banner_middle ">
          {/* <img src={bannerImg} alt="" className="img-fluid" /> */}
        </div>
        <div className="banner_right">
          <div className="moto">
            <h4>OUR MOTO</h4>
            <h2>GREAT HEALTH</h2>
          </div>
          <div className="specialization">
            <h4>SPECIALIZATION IN</h4>
            <p>CARDIOLOGIST</p>
            <p>AUDIOLOGIST</p>
            <p>INTERNISTS</p>
          </div>
          <div className="madical_info">
            <h4>MADICAL INFO</h4>
            <p>DR. K.F. BRANDINA</p>
            <img src={signature} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;

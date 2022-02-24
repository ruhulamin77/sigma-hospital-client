import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ChooseUs.css";

const ChooseUs = () => {
  const [pageUs, setPageUs] = useState(0)
  const handleHight = () => setPageUs(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleHight)
  }, [])

  return (
    <div className="section chooseUs-Fild">
      <h2 style={{ transform: `translateX(${(pageUs - 1000) * .5}px)` }}>WHY CHOOSE US</h2>
      <Container className="why-choose padding-container">
        <div className="outer-why-content row">
          <div className="col-lg-2"></div>
          <div className="why-content col-lg-10">
            <p className="why-choose-pragraph">why choose us</p>
            <h1 className="Turst-people">Why People Trust </h1>
            <h4 className="Treatment">Sigma Treatment</h4>
            <p className="sigma-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className=" row mt-5">
          <div className="col-lg-2"></div>
          <div className="peaper col-lg-10">
            <div className="row gy-5 gx-4">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="paper-item">
                  <div className="paper-hover">
                  <img
                    src="https://wordpress.iqonic.design/kivicare/wp-content/uploads/2021/01/icon-3-1.png"
                    alt=""
                    className="image-icon"
                  />

                  <h5>Qualified Doctors</h5>
                  <p className="content-pragraph">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin.
                  </p>
                  <button className="read-btn">
                    READ MORE <i className="fas fa-plus btn-red"></i>
                  </button>
                  </div>
                </div>

              </div>
              <div className="  col-lg-4 col-md-6 col-sm-12 ">
                <div className="paper-item">
                <div className="paper-hover">
                  <img
                    src="https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/icon-2-1.png"
                    alt=""
                    className="image-icon"
                  />

                  <h5>Trusted Treatment</h5>
                  <p className="content-pragraph">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin.
                  </p>
                  <button className="read-btn">
                    READ MORE <i className="fas fa-plus btn-red"></i>
                  </button>
                  </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="paper-item">
                <div className="paper-hover">
                <img
                  src="https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/icon-1-1.png"
                  alt=""
                  className="image-icon"
                />

                <h5>24/7 Services</h5>
                <p className="content-pragraph">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin.
                </p>
                <button className="read-btn">
                  READ MORE <i className="fas fa-plus btn-red"></i>
                </button>
                  </div>
                  </div>
                
              </div>
            </div>


          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;

import React, { useState, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from '../../../../images/testimonial/01.jpg'
import img2 from '../../../../images/testimonial/02.jpg'
import img3 from '../../../../images/testimonial/03.jpg'
import './TestimonialSlider.css'

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        ref={ref}
        className="testimonial-slider mt-3"
      >
        <Carousel.Item>
          <p className='lh-2 fz-1 mb-5'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"</p>
          <div className="d-flex align-items-center mt-4">
            <img className="img img-fluid me-4 testimonial-img" src={img1} alt="" />
            <div>
              <h5 className="testimoneal-name">Tom Dravid</h5>
              <span className="testimoneal-role text-uppercase mt-1">Engineer, Tesla</span>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <p className='lh-2 fz-1 mb-5'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"</p>
          <div className="d-flex align-items-center mt-4">
            <img className="img img-fluid me-4 testimonial-img" src={img2} alt="" />
            <div>
              <h5 className="testimoneal-name">Anthoney Mark</h5>
              <span className="testimoneal-role text-uppercase mt-1">Doctor, USA</span>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <p className='lh-2 fz-1 mb-5'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"</p>
          <div className="d-flex align-items-center mt-4">
            <img className="img img-fluid me-4 testimonial-img" src={img3} alt="" />
            <div>
              <h5 className="testimoneal-name">Julia Loren</h5>
              <span className="testimoneal-role text-uppercase mt-1">Model, Uniliver</span>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <p className='lh-2 fz-1 mb-5'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"</p>
          <div className="d-flex align-items-center mt-4">
            <img className="img img-fluid me-4 testimonial-img" src={img2} alt="" />
            <div>
              <h5 className="testimoneal-name">Jm Rohid</h5>
              <span className="testimoneal-role text-uppercase mt-1">CEO, Jm Corp</span>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div>
        <div className="button-container d-flex justify-content-end testimonial-slider mt-5">
            <button className="testimonial-arrow me-4" onClick={onPrevClick}>
              <FaArrowLeft />
            </button>
            <button className="testimonial-arrow" onClick={onNextClick}>
              <FaArrowRight />
            </button>
      </div>
      </div>
    </>
  );
};

export default TestimonialSlider;

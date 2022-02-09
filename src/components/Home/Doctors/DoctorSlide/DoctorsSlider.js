import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import carosel1 from '../../../../images/doctors/01.jpg';
import carosel2 from '../../../../images/doctors/3.jpg';
import carosel3 from '../../../../images/doctors/6.jpg';
import carosel4 from '../../../../images/doctors/07.jpg';
import carosel5 from '../../../../images/doctors/11.jpg';
import './DoctorsSlide.css';

export default class DoctorsSlide extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div>
                <Container className='mt-5'>
                    <Slider {...settings}>
                        <div>
                            <div className="card doctor-card">
                                <img src={carosel1} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className='icon-setup'>
                                        <i className="fab fa-facebook-square"></i><br />
                                        <i className="fab fa-twitter-square"></i><br />
                                        <i className="fab fa-google"></i>
                                    </div>
                                    <div className='about-doctor'>
                                        <h2>Name</h2>
                                        <h5>Position</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card doctor-card">
                                <img src={carosel2} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className='icon-setup'>
                                        <i className="fab fa-facebook-square"></i><br />
                                        <i className="fab fa-twitter-square"></i><br />
                                        <i className="fab fa-google"></i>
                                    </div>
                                    <div className='about-doctor'>
                                        <h2>Name</h2>
                                        <h5>Position</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card doctor-card">
                                <img src={carosel3} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className='icon-setup'>
                                        <i className="fab fa-facebook-square"></i><br />
                                        <i className="fab fa-twitter-square"></i><br />
                                        <i className="fab fa-google"></i>
                                    </div>
                                    <div className='about-doctor'>
                                        <h2>Name</h2>
                                        <h5>Position</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card doctor-card">
                                <img src={carosel4} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className='icon-setup'>
                                        <i className="fab fa-facebook-square"></i><br />
                                        <i className="fab fa-twitter-square"></i><br />
                                        <i className="fab fa-google"></i>
                                    </div>
                                    <div className='about-doctor'>
                                        <h2>Name</h2>
                                        <h5>Position</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card doctor-card">
                                <img src={carosel5} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className='icon-setup'>
                                        <i className="fab fa-facebook-square"></i><br />
                                        <i className="fab fa-twitter-square"></i><br />
                                        <i className="fab fa-google"></i>
                                    </div>
                                    <div className='about-doctor'>
                                        <h2>Name</h2>
                                        <h5>Position</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </div>
        );
    }
}
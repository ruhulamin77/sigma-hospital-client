import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import './DoctorsSlide.css';
import { NavLink } from 'react-router-dom';

const DoctorsSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [doctorInfo, setDoctorInfo] = useState([]);
    console.log(doctorInfo);
    useEffect(() => {
        fetch('http://localhost:7050/doctors')
            .then(res => res.json())
            .then(data => setDoctorInfo(data))
    }, []);

    return (
        <div>
            <Container className='mt-5 mb-5'>
                <Slider {...settings}>
                    {
                        doctorInfo.map(doctor =>
                            <div key={doctor._id}>
                                <div className="card doctor-card">
                                    <img src={doctor?.photo} className="card-img" alt="..." />
                                    <div className="row card-img-overlay">
                                        <div className='icon-setup'>
                                            <a href={doctor.social.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                                            <br />
                                            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                                            <br />
                                            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-google"></i></a>
                                        </div>
                                        <div className='mt-auto about-doctor'>
                                            <h2>
                                                <NavLink to={`/singleDoctor/${doctor._id}`} className="text-decoration-none">{doctor?.name}</NavLink>
                                            </h2>
                                            <h5>{doctor?.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </Slider>
            </Container>
        </div>
    );
};

export default DoctorsSlider;
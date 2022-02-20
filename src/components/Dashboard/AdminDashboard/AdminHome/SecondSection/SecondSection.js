import React from 'react';
import "./SecondSection.css";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo from '../../../../../images/doctors/07.jpg'

const SecondSection = () => {
    const VisitorsStatistics = [
        {
            month: 'Dec 01',
            TotalVisit: "0",
        },
        {
            month: 'Dec 15',
            TotalVisit: "300",
        },
        {
            month: 'Jan 01',
            TotalVisit: "3700",
        },
        {
            month: 'Jan 15',
            TotalVisit: "3500",
        },
        {
            month: 'Feb 01',
            TotalVisit: "1600",
        },
        {
            month: 'Feb 15',
            TotalVisit: "1200",
        },
        {
            month: 'Mar 01',
            TotalVisit: "1800"
        },
        {
            month: 'Mar 15',
            TotalVisit: "2000",
        },
        {
            month: 'Apr 01',
            TotalVisit: "1700",
        },
        {
            month: 'Apr 15',
            TotalVisit: "1500",
        },
        {
            month: 'May 01',
            TotalVisit: "1700",
        },
        {
            month: 'May 15',
            TotalVisit: "1600",
        },
        {
            month: 'Jun 01',
            TotalVisit: "2200",
        },
        {
            month: 'Jul 01',
            TotalVisit: "2100",
        },
        {
            month: 'Jul 15',
            TotalVisit: "1900",
        },
        {
            month: 'Agu 01',
            TotalVisit: "1500",
        },
        {
            month: 'Agu 15',
            TotalVisit: "1300",
        },
        {
            month: 'Sep 01',
            TotalVisit: "2800",
        },
        {
            month: 'Sep 15',
            TotalVisit: "2200",
        },
        {
            month: 'Oct 01',
            TotalVisit: "1700",
        },
        {
            month: 'Oct 15',
            TotalVisit: "1900",
        },
        {
            month: 'Nov 01',
            TotalVisit: "1600",
        },
        {
            month: 'Nov 15',
            TotalVisit: "2000",
        }
    ];
    const countyVisitors = [
        {
            country: "Canada",
            visitors: "1,100"
        },
        {
            country: "America",
            visitors: "2,020"
        },
        {
            country: "Brazil",
            visitors: "680"
        },
        {
            country: "Canada",
            visitors: "1,100"
        },
        {
            country: "Uk",
            visitors: "1,025"
        },
        {
            country: "France",
            visitors: "582"
        },
        {
            country: "Georgia",
            visitors: "128"
        },
        {
            country: "India",
            visitors: "3,854"
        },
        {
            country: "Other",
            visitors: "865"
        },
    ];

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        arrows: false
    };

    // const handleCheckPoint = () => {
    //     console.log('clicked');
    // }

    return (
        <div style={{ backgroundColor: "#F4F7F6" }}>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col className='col-12 col-md-8'>
                        <Card className='card-control2'>
                            <div className='visitors-Headline'>
                                <h6>Visitors Statistics</h6>
                                <div className='text-secondary visitorTopLeft'>
                                    <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="Week">W</h6>
                                    <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="Month">M</h6>
                                    <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="Year">Y</h6>
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" aspect={3} >
                                <LineChart
                                    data={VisitorsStatistics}
                                >
                                    <CartesianGrid />
                                    <XAxis dataKey="month" interval={'preserveStartEnd'} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line dataKey="TotalVisit" dot={false} stroke='#EDC449' strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                            <div className='row text-center mt-3'>
                                <div className='col-12 col-md-6'>
                                    <div className='row'>
                                        <Card className='col-6 border-0'>

                                            <div className='p-3' style={{ backgroundColor: "#BDF3F5" }}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <h3>America</h3>
                                                        <h6>2,020</h6>
                                                    </div>
                                                    <div>
                                                        <h3>Canada</h3>
                                                        <h6>1,100</h6>
                                                    </div>
                                                    <div>
                                                        <h3>Brazil</h3>
                                                        <h6>680</h6>
                                                    </div>
                                                </Slider>
                                            </div>

                                        </Card>

                                        <Card className='col-6 border-0'>

                                            <div className='p-3' style={{ backgroundColor: "#b3b5dd" }}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <h3>Uk</h3>
                                                        <h6>1,025</h6>
                                                    </div>
                                                    <div>
                                                        <h3>France</h3>
                                                        <h6>582</h6>
                                                    </div>
                                                    <div>
                                                        <h3>Georgia</h3>
                                                        <h6>128</h6>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </Card>
                                    </div>
                                </div>

                                <div className='col-12 col-md-6'>
                                    <div className='row'>
                                        <Card className='col-6 border-0'>

                                            <div className='p-3' style={{ backgroundColor: "#FFD4C3" }}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <h3>India</h3>
                                                        <h6>3,854</h6>
                                                    </div>
                                                </Slider>
                                            </div>

                                        </Card>

                                        <Card className='col-6 border-0'>

                                            <div className='p-3' style={{ backgroundColor: "#ECEEEF" }}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <h3>Other</h3>
                                                        <h6>865</h6>
                                                    </div>
                                                </Slider>
                                            </div>

                                        </Card>

                                    </div>
                                </div>

                            </div>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-4'>
                        <Card className='card-control2'>
                            <h6>ToDo List</h6>
                            <small className='text-secondary'>This Month task list</small>
                            <div className='todo-board mt-3'>
                                {/* {
                                        doctrwe.map(asdf => {

                                        })
                                    } */}
                                <label className='todo1'>
                                    <input type="checkbox" name="packersOff" className="edit-check" value="1" />
                                    <div>
                                        <p>A Brief History Of Anesthetics</p>
                                        <small className='text-secondary'>Scheduled for ...</small>
                                        <img src={photo} alt="DoctorPhoto" />
                                    </div>

                                </label>
                                <label className='todo2'>
                                    <input type="checkbox" name="packersOff" className="edit-check" value="1" />
                                    <div>
                                        <p>Using Laser Teatment to Help</p>
                                        <small>Scheduled for ...</small>
                                        <img src={photo} alt="DoctorPhoto" />
                                    </div>

                                </label>
                                <label className='todo3'>
                                    <input type="checkbox" name="packersOff" className="edit-check" value="1" />
                                    <div>
                                        <p>Selecting the Apnea Treatment</p>
                                        <small>Scheduled for ...</small>
                                        <img src={photo} alt="DoctorPhoto" />
                                    </div>

                                </label>
                                <label className='todo4'>
                                    <input type="checkbox" name="packersOff" className="edit-check" value="1" />
                                    <div>
                                        <p>Using Laser Teatment to Help</p>
                                        <small>Scheduled for ...</small>
                                        <img src={photo} alt="DoctorPhoto" />
                                    </div>
                                </label>

                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SecondSection;
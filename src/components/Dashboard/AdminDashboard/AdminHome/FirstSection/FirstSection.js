import React, { PureComponent } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import "./FirstSection.css";
import { FaUserAlt, FaUserMd, FaRegEye } from 'react-icons/fa';
import { MdAccountBalance } from "react-icons/md";
import { BiLike, BiHappyAlt } from "react-icons/bi";
import { BsWallet2 } from "react-icons/bs";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const FirstSection = () => {

    const data = [
        {
            name: 'Jan',
            Operation: 4000,
            Pharmacy: 2400,
            Expenses: 3100,
            amt: 2400,
        },
        {
            name: 'Feb',
            Operation: 3000,
            Pharmacy: 1398,
            Expenses: 1400,
            amt: 2210,
        },
        {
            name: 'Mar',
            Operation: 2000,
            Pharmacy: 9800,
            Expenses: 800,
            amt: 2290,
        },
        {
            name: 'Apr',
            Operation: 2780,
            Pharmacy: 3908,
            Expenses: 1600,
            amt: 2000,
        },
        {
            name: 'Jun',
            Operation: 1890,
            Pharmacy: 4800,
            Expenses: 2600,
            amt: 2181,
        },
        {
            name: 'Jul',
            Operation: 2390,
            Pharmacy: 3800,
            Expenses: 1120,
            amt: 2500,
        },
        {
            name: 'Agu',
            Operation: 3490,
            Pharmacy: 4300,
            Expenses: 2440,
            amt: 2100,
        },
        {
            name: 'Sep',
            Operation: 3490,
            Pharmacy: 4300,
            Expenses: 940,
            amt: 2100,
        },
        {
            name: 'Oct',
            Operation: 3490,
            Pharmacy: 4300,
            Expenses: 560,
            amt: 2100,
        },
        {
            name: 'Nov',
            Operation: 3490,
            Pharmacy: 4300,
            Expenses: 2100,
            amt: 2100,
        },
        {
            name: 'Dec',
            Operation: 3490,
            Pharmacy: 4300,
            Expenses: 2940,
            amt: 2100,
        },
    ];
    return (

        <section className='dashbord-fild'>
            <div className='container'>
                <div className=' row pt-5 pb-5'>
                    <div className='col-lg-3 col-sm-12'>
                        <Card className='card-control'>
                            <Carousel className='slider-control'>
                                <Carousel.Item>
                                    <div className='item'>
                                        <div>
                                            <FaUserAlt className='user-icon-admin' />
                                        </div>
                                        <div>
                                            <p className='total-Patient'>Total Patient</p>
                                            <strong>215</strong>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className='item'>
                                        <div>
                                            <FaUserAlt className='user-icon-admin' />
                                        </div>
                                        <div>
                                            <p className='total-Patient'>New Patient</p>
                                            <strong>21</strong>
                                        </div>
                                    </div>


                                </Carousel.Item>
                            </Carousel>
                            <hr />
                            <Carousel className='slider-control'>
                                <Carousel.Item>
                                    <div className='item'>
                                        <div>
                                            <FaUserMd className='user-icon-admin' />
                                        </div>
                                        <div>
                                            <p className='total-Patient'>Treatment</p>
                                            <strong>21</strong>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className='item'>
                                        <div>
                                            <FaUserMd className='user-icon-admin' />
                                        </div>
                                        <div>
                                            <p className='total-Patient'>Surgery</p>
                                            <strong>10</strong>
                                        </div>
                                    </div>


                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='item'>
                                        <div>
                                            <FaUserMd className='user-icon-admin' />
                                        </div>
                                        <div>
                                            <p className='total-Patient'>Operations</p>
                                            <strong>7</strong>
                                        </div>
                                    </div>


                                </Carousel.Item>
                            </Carousel>


                        </Card>


                        {/* 2nd Card Start */}
                        <Card className='card-control mt-5'>
                            <Carousel className='slider-control'>
                                <Carousel.Item>
                                    <div className='item'>
                                        <div>
                                            <FaRegEye className='user-icon-admin' />
                                        </div>
                                        <div>
                                            <p className='total-Patient'>Total Visitors</p>
                                            <strong>10K</strong>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className='item'>
                                        <div>
                                            <FaRegEye className='user-icon-admin' />
                                        </div>
                                        <div>
                                            <p className='total-Patient'>Today Visitors</p>
                                            <strong>216</strong>
                                        </div>
                                    </div>


                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='item'>
                                        <div>
                                            <FaRegEye className='user-icon-admin' />
                                        </div>
                                        <div>
                                            <p className='total-Patient'>Month Visitors</p>
                                            <strong>2184</strong>
                                        </div>
                                    </div>


                                </Carousel.Item>
                            </Carousel>
                            <hr />
                            <div className='item'>
                                <div>
                                    <MdAccountBalance className='user-icon-admin' />
                                </div>
                                <div>
                                    <p className='total-Patient'>Revenue</p>
                                    <strong>21</strong>
                                </div>
                            </div>




                        </Card>

                        {/* 3rd Card Start */}
                        <Card className='card-control mt-5'>

                            <div className='item'>
                                <div>
                                    <BiLike className='user-icon-admin' />
                                </div>
                                <div>
                                    <p className='total-Patient'>Happy Clients
                                    </p>
                                    <strong>528</strong>
                                </div>
                            </div>



                            <hr />

                            <div className='item'>
                                <div>
                                    <BiHappyAlt className='user-icon-admin' />
                                </div>
                                <div>
                                    <p className='total-Patient'>Smiley Faces
                                    </p>
                                    <strong>2,528</strong>
                                </div>
                            </div>



                        </Card>



                    </div>
                    <div className='col-lg-9 col-sm-12'>
                        <Card className='card-chart-fild'>
                            <h5 className='Total-Revenue'>Total Revenue</h5>

                            <div className='income-fild'>

                                <div className='Operation'>
                                    <h4><BsWallet2 /> 7,12,326$</h4>
                                    <p>Operation Income</p>
                                </div>

                                <div className='Pharmacy'>
                                    <h4><BsWallet2 /> 25,965$</h4>
                                    <p>Pharmacy Income</p>
                                </div>

                                <div className='Hospital' >
                                    <h4><BsWallet2 /> 14,965$</h4>
                                    <p>Hospital Expenses</p>
                                </div>






                            </div>

                            <div className='charts'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />

                                        <Line type="monotone" dataKey="Operation" stroke="#28A745" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="Pharmacy" stroke="#F88519" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="Expenses" stroke="#F93E3E" activeDot={{ r: 8 }} />

                                    </LineChart>
                                </ResponsiveContainer>
                            </div>









                        </Card>



                    </div>



                </div>

            </div>
        </section>


    );
};

export default FirstSection;
import React from 'react';
import { Card } from 'react-bootstrap';
import './ThirdSection.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ThirdSection = () => {
    const data = [
        {
            name: 'Q1',
            uv: 4000,
            pv: 2400,
            av: 3400,
            amt: 2400,
        },
        {
            name: 'Q2',
            uv: 3000,
            pv: 1398,
            av: 400,
            amt: 2210,
        },
        {
            name: 'Q3',
            uv: 2000,
            pv: 9800,
            av: 4100,
            amt: 2290,
        },
        {
            name: 'Q4',
            uv: 2780,
            pv: 3908,
            amt: 2000,
            av: 1400,
        },
        {
            name: 'Q5',
            uv: 1890,
            pv: 4800,
            av: 1000,
            amt: 2181,
        },
        {
            name: 'Q6',
            uv: 2390,
            pv: 3800,
            av: 1500,
            amt: 2500,
        },

    ];


    return (
        <section className='thard-section'>
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <Card className='thard'>
                            <div className='card-top-section'>
                                <p className='Patient-history'>Patient history</p>
                                <ul>
                                    <li>W</li>
                                    <li>M</li>
                                    <li>Y</li>
                                </ul>
                            </div>

                            <div className='icu-section'>
                                <ul className='ct-legend'>
                                    <li className="ct-series-1 inactive" data-legend="1">ICU</li>
                                    <li className="ct-series-2 inactive" data-legend="2">IN-Patinet</li>
                                    <li className="ct-series-3 inactive" data-legend="3">OUT-Patient</li>

                                </ul>

                            </div>

                            <div className='BarChart-2nd-part'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        width={300}
                                        height={100}
                                        data={data}
                                        margin={{
                                            top: 20,
                                            right: 15,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                        barSize={25}

                                    >
                                        <CartesianGrid />
                                        <XAxis dataKey="name" scale="point" padding={{ left: 25, right: 25 }} />
                                        <YAxis />
                                        <Tooltip />

                                        <Bar dataKey="pv" stackId="a" fill="#38bfc6" />
                                        <Bar dataKey="uv" stackId="a" fill="#F9A11D" />
                                        <Bar dataKey="av" stackId="a" fill="#AB7DF6" />
                                    </BarChart>
                                </ResponsiveContainer>

                            </div>

                        </Card>

                    </div>

                    <div className='col-lg-6 col-sm-12'>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ThirdSection;
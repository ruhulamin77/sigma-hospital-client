import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiLocationMarker, HiMail, HiPhoneMissedCall } from "react-icons/hi";
import { Table } from 'react-bootstrap';

const PdfInvoice = () => {
    const [itemdata, setData] = useState({})
    console.log(itemdata)
    const { id } = useParams()
    useEffect(() => {
        fetch('http://localhost:7050/order')
            .then(res => res.json())
            .then(data => {
                const Order = data.find((data) => data?._id === `${id}`);
                setData(Order)

            })
    }, [])

    return (
        <div className='pdfinvoice'>
            <div className='pdf-body'>
                <div className='container invoice-body'>
                    <section className='invoice-header'>
                        <div>
                            <h4 className='invoice'>Invoice</h4>
                        </div>
                        <div className='hospital-info'>
                            <h6>Sigma Care Hospial</h6>
                            <p> <HiLocationMarker />1234 North Avenue Luke, South Bend, IN 360001</p>
                            <p><HiPhoneMissedCall />+8801629094984</p>
                            <p> <HiMail />support@gmail.com</p>
                        </div>
                    </section>
                    <section className='customer-info'>
                        <div>
                            <h4>Build To</h4>
                            <p>Name: {itemdata?.data?.cusName}</p>
                            <p>Address: {itemdata?.data?.cusAddress}</p>
                            <p>Phone Number: {itemdata?.data?.cusNumber}</p>
                            <p>Country: {itemdata?.data?.cus_country}</p>
                            <p>Payment Status: {itemdata?.data?.paymentStatus}</p>

                        </div>

                        <div>
                            <h4>Invoice Number</h4>
                            <p>{itemdata?._id}</p>

                        </div>
                    </section>
                    <section className='product-info'>
                        <Table >
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Product Name</th>
                                    <th>Brand</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemdata.item?.slice(1).map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.brand}</td>
                                        <td>{item?.type}</td>
                                        <td>{item?.price}</td>
                                        <td>{item?.quantity}</td>
                                        <td>{item?.Total}</td>
                                    </tr>


                                ))}

                                <tr>
                                    <td></td>
                                    <td colSpan={5}>Grand Total</td>
                                    <td>{itemdata.data?.total_amount}</td>
                                </tr>
                            </tbody>
                        </Table>


                    </section>


                </div>
            </div>

        </div>
    );
};

export default PdfInvoice;
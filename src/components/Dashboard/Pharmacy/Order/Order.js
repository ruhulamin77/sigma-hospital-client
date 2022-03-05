import React from 'react';
import './Order.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import OrderData from '../OrderData/OrderData';
import { Link } from 'react-router-dom';

const Order = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()


    let grandTotal = 0;
    for (let index = 0; index < cart.cartItems.length; index++) {
        if (index !== 0) {
            grandTotal += Number(cart.cartItems[index].Total)
        }


    }

    return (
        <section>
            <div className='container'>
                <Table striped bordered hover size="sm" className=' mt-5'>
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>brand</th>
                            <th>Medicine-Name</th>
                            <th>pawer</th>
                            <th>type</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.cartItems?.slice(1).map((medicine, index) => (
                            <OrderData medicine={medicine}
                                key={medicine._id}
                                index={index}

                            ></OrderData>

                        ))}

                    </tbody>
                </Table>
                <div className='continue-shoping'>

                    <h5 className='shoping-total'>Sub Total = {grandTotal}</h5>
                    <Link to="/Pharmacy" className='back-shoping' >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-arrow-left"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                            />
                        </svg>
                        <span >Continue Shopping</span>
                    </Link>
                </div>



            </div>
        </section>
    );
};

export default Order;
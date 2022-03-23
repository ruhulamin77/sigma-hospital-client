import axios from 'axios';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, removeFromCart } from '../../../../features/cartSlice';
import OrderData from '../OrderData/OrderData';
import './Order.css';

const Order = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()



    //remove cart//
    const handelremovecart = (cartItems) => {
        axios.put(`http://localhost:7050/medicine`, {
            item: { cartItems },
        })
            .then((data) => {

            })
            .catch((err) => {
                console.log(err);

            });
        dispatch(removeFromCart(cartItems))
    }
    //remove cart//

    const handelcrealecart = () => {
        dispatch(clearCart())
    };


    let grandTotal = 0;
    for (let index = 0; index < cart.cartItems.length; index++) {
        if (index !== 0) {
            grandTotal += Number(cart.cartItems[index].Total)
        }
    }
    ////costomer data Colaction ////
    const handelname = (e) => {
        const name = e.target.value;
        setName(name)


    }
    const handelnumber = (e) => {
        const number = e.target.value;
        setNumber(number)


    }
    const handeladdress = (e) => {
        const address = e.target.value;
        setAddress(address)

    }

    const handelPayment = () => {
        const finalorder = {
            cus_name: name,
            cus_number: number,
            cus_address: address,
            item: cart.cartItems,
            Total: grandTotal
        }
        fetch('http://localhost:7050/init', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(finalorder)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data)
                handelcrealecart()
            })

    }




    return (
        <section className='mt-5'>
            <div className='container mt-5'>

                <span className='user_info' >Customer Name :</span>  <input type="text" onBlur={handelname} className='cus_info_fild' required={true} /> <br />
                <span className='user_info'> Customer Number :</span>  <input type="text" onBlur={handelnumber} className='cus_info_fild' required={true} /> <br />
                <span className='user_info'>Customer Address :</span>  <input type="text" onBlur={handeladdress} className='cus_info_fild' required={true} /> <br />


                <Table striped bordered hover size="sm" className=' mt-5'>
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Brand</th>
                            <th>Medicine-Name</th>
                            <th>Power</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th >Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.cartItems?.slice(1).map((medicine, index) => (
                            <OrderData medicine={medicine}
                                key={medicine._id}
                                index={index}
                                handelremovecart={handelremovecart}


                            ></OrderData>

                        ))}

                    </tbody>
                </Table>





                <div className='continue-shoping'>
                    <div>
                        <button onClick={() => handelcrealecart()} className='clear'>Clear -Cart</button>
                    </div>

                    <div>
                        <h5 className='shoping-total'>Sub Total = {grandTotal} Tk</h5>
                        <div>
                            <button onClick={handelPayment}
                                className='payment-btn'
                            >Payment</button>
                        </div>
                        <Link to="/dashboard/Pharmacy" className='back-shoping' >
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



            </div>
        </section>
    );
};

export default Order;
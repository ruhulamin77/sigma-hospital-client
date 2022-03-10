import React, { useEffect, useState } from 'react';
import { NavLink, Table } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';
import "./ProductRecive.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductReciveData from '../ProductReciveData/ProductReciveData';

const ProductRecive = () => {
    const [medicines, setMedicines] = useState([])
    const [searchData, setSearchData] = useState([])





    useEffect(() => {
        fetch("https://shrouded-headland-44423.herokuapp.com/medicine")
            .then(res => res.json())
            .then(data => {
                setMedicines(data)
                setSearchData(data)

            })
    }, [medicines])

    const handelsearchData = (e) => {
        let search = e.target.value.toLowerCase()
        const searchMedicine = medicines.filter((searceData) => searceData?.name.toLowerCase().includes(search))
        setSearchData(searchMedicine)

    }
    return (
        <div className='container mt-5 mb-5'>

            <div>
                <div className='cart'>
                    {/* <NavLink to="/order">
                        <p className='cart-item'>{
                            !cart.cartItems?.length ? 0 : cart.cartItems?.length - 1
                        }</p>
                        <AiOutlineShoppingCart className='cart-icon' />
                    </NavLink> */}

                </div>


                <div className='search'>

                    <input type="text" onChange={handelsearchData} className='search-option-medicen' placeholder='Search Medicine' />
                </div>

                {
                    !medicines?.length ? <div className='Medicine-spnir'>
                        <ScaleLoader
                            color={"#7093e5"} size={150} />
                    </div>
                        :

                        <Table striped bordered hover size="sm" className=' mt-5'>
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>brand</th>
                                    <th>Medicine-Name</th>
                                    <th>pawer</th>
                                    <th>type</th>
                                    <th>stock</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData?.map((medicine, index) => (
                                    <ProductReciveData medicine={medicine}
                                        key={medicine._id}
                                        index={index}

                                    ></ProductReciveData>

                                ))}

                            </tbody>
                        </Table>
                }
            </div>

        </div >
    );
};

export default ProductRecive;
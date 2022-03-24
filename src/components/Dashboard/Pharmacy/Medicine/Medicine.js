import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import TableRow from '../TableRow/TableRow';
import './Medicine.css';


const Medicine = () => {
    const [medicines, setMedicines] = useState([])
    const [searchData, setSearchData] = useState([])
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        fetch(`https://shrouded-headland-44423.herokuapp.com/medicine`)
            .then(res => res.json())
            .then(data => {
                setMedicines(data)
                setSearchData(data)
            })
    }, [])

    const handelsearchData = (e) => {
        let search = e.target.value.toLowerCase()
        const searchMedicine = medicines.filter((searceData) => searceData?.name.toLowerCase().includes(search))
        setSearchData(searchMedicine)

    }


    return (
        <div className='container mt-5 mb-5'>

            <div>
                <div className='cart'>
                    <NavLink to="/dashboard/order">
                        <p className='cart-item'>{
                            !cart.cartItems?.length ? 0 : cart.cartItems?.length - 1
                        }</p>
                        <AiOutlineShoppingCart className='cart-icon' />
                    </NavLink>

                </div>


                <div className='search-medicen'>
                    <input type="text" onChange={handelsearchData} className='search-option-medicen' placeholder='Search Medicine' />
                </div>

                {
                    !searchData?.length ? <div className='Medicine-spnir'>
                        <ScaleLoader
                            color={"#7093e5"} size={150} />
                    </div>
                        :
                        <div>
                            <h4 className='Medicine-Center'>Sigma Care Medicine Center</h4>
                            <Table striped bordered hover size="sm" className=' mt-5'>
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Medicine-Name</th>
                                        <th>Brand</th>
                                        <th>Power</th>
                                        <th>Type</th>
                                        <th>Stock</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Value</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchData?.map((medicine, index) => (
                                        <TableRow medicine={medicine}
                                            key={medicine._id}
                                            index={index}

                                        ></TableRow>

                                    ))}

                                </tbody>
                            </Table>
                        </div>


                }
                {/* <div className='pageCount'>

                    <small className='pageNumber'>Pages :</small>   {[...Array(pageCount).keys()]
                        .map(number => <button
                            className={number === page ? "selected" : " "}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)

                    }

                </div> */}
            </div>

        </div >
    );
};

export default Medicine;

import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';
import ProductReciveData from '../ProductReciveData/ProductReciveData';
import "./ProductRecive.css";

const ProductRecive = () => {

    const [medicines, setMedicines] = useState([])
    const [searchData, setSearchData] = useState([])





    useEffect(() => {
        fetch("http://localhost:7050/medicine")
            .then(res => res.json())
            .then(data => {
                setMedicines(data.medicine)
                setSearchData(data.medicine)

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
                </div>
                <div className='search-medicen'>
                    <input type="text" onChange={handelsearchData} className='search-option-medicen' placeholder='Search Medicine' />
                </div>

                {
                    !medicines?.length ? <div className='Medicine-spnir'>
                        <ScaleLoader
                            color={"#7093e5"} size={150} />
                    </div>
                        :
                        <div>
                            <h4 className='Medicine-Center'>Add Product Stock</h4>
                            <Table striped bordered hover size="sm" className=' mt-5'>
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Brand</th>
                                        <th>Medicine-Name</th>
                                        <th>Power</th>
                                        <th>Type</th>
                                        <th>Stock</th>
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
                        </div>
                }
            </div>

        </div >
    );
};

export default ProductRecive;
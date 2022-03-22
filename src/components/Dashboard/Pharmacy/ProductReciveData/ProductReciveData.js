import axios from 'axios';
import React, { useState } from 'react';


const ProductReciveData = ({ index, medicine }) => {
    const [data, setData] = useState(null)

    const handelvalue = (e) => {
        const data = e.target.value;
        setData(data)
        e.target.value = ""


    }

    const handeldata = (data) => {
        axios.put(`https://shrouded-headland-44423.herokuapp.com/medicine/${medicine._id}`, {
            stock: { data },
        })
            .then((data) => {

            })
            .catch((err) => {
                console.log(err);

            });


    }
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{medicine?.brand}</td>
                <td>{medicine?.name}</td>
                <td>{medicine?.pawer}</td>
                <td>{medicine?.type}</td>
                <td>{medicine?.stock}</td>
                <td>{medicine?.salePrice}</td>
                <td className='quantity'><input type="text" onBlur={handelvalue} className='add-stock-input' /></td>
                <td className='quantity'><button onClick={() => handeldata(data)} className='add-stock-btn'>Add-Stock</button></td>
            </tr>

        </>
    );
};

export default ProductReciveData;
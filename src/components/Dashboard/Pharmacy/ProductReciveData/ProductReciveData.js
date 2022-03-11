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
        console.log(data)
        axios.put(`http://localhost:7050/medicine/${medicine._id}`, {
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
                <td>{medicine?.pawer[0]}</td>
                <td>{medicine?.type[0]}</td>
                <td>{medicine?.stock}</td>
                <td>{medicine?.salePrice}</td>
                <td><input type="text" onBlur={handelvalue} /></td>
                <td><button onClick={() => handeldata(data)}>Add-Stock</button></td>
            </tr>

        </>
    );
};

export default ProductReciveData;
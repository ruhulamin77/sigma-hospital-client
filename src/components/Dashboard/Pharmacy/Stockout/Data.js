import React from 'react';

const Data = ({ medicine, index }) => {
    console.log(medicine)
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{medicine?.brand}</td>
            <td>{medicine?.name}</td>
            <td>{medicine?.pawer}</td>
            <td>{medicine?.type}</td>
            <td >{medicine?.stock}</td>
            <td>{medicine?.salePrice}</td>
            <td>{medicine?.unitPrice}</td>

        </tr>
    );
};

export default Data;
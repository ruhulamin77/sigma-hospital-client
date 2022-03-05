import React from 'react';

const OrderData = ({ medicine, index }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{medicine?.brand}</td>
            <td>{medicine?.name}</td>
            <td>{medicine?.pawer}</td>
            <td>{medicine?.type}</td>
            <td>{medicine?.price}</td>
            <td>{medicine?.quantity}</td>
            <td>{medicine?.Total}</td>
            <td><button className='edit-btn'>Edit</button></td>


        </tr>
    );
};

export default OrderData;

import React from 'react';

const OrderData = ({ medicine, index, handelremovecart }) => {
    console.log(medicine)


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{medicine?.name}</td>
            <td>{medicine?.brand}</td>
            <td>{medicine?.pawer}</td>
            <td>{medicine?.type}</td>
            <td>{medicine?.price}</td>
            <td>{medicine?.quantity}</td>
            <td>{medicine?.Total}</td>
            <td className='btn-td quantity'>
                <button className='edit-btn1' onClick={() => handelremovecart(medicine)} >Delete</button>
            </td>


        </tr>
    );
};

export default OrderData;

import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editQuantity } from '../../../../features/cartSlice';

const OrderData = ({ medicine, index, handelremovecart }) => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => {
        editQuantity(medicine)
        setShow(false)
    }
        ;
    const handleShow = () => setShow(true);

    const handelQuantity = (e) => {
        const changeQuantity = e.target.value;
        const updateuantity = { ...medicine };
        updateuantity.quantity = changeQuantity


    }

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
            <td className='btn-td'>
                <button className='edit-btn1' onClick={() => handelremovecart(medicine)} >Delete</button>
            </td>


        </tr>
    );
};

export default OrderData;
import React from 'react';
import { Link } from 'react-router-dom';

const ManageInvoice = (props) => {
    const { _id } = props.invoice;
    const { cusName, cusAddress, cusNumber } = props.invoice.data
    return (


        <tr>
            <td>{props.index + 1}</td>
            <td>{cusName}</td>
            <td>{cusAddress}</td>
            <td>{cusNumber}</td>
            <td><Link to={`/dashboard/PdfInvoice/${_id}`} className="nav-link" >
                Invoice
            </Link></td>

        </tr>


    );
};

export default ManageInvoice;
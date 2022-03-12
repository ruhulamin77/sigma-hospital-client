import React from 'react';
import { Link } from 'react-router-dom';

const ManageInvoice = (props) => {
    const { _id } = props.invoice;
    return (
        <div>
            <Link to={`/dashboard/PdfInvoice/${_id}`} >
                {_id}
            </Link>


        </div>
    );
};

export default ManageInvoice;
import React from 'react';
import { Link } from 'react-router-dom';

const ManageInvoice = (props) => {
    const { _id } = props.invoice;
    return (
        <div className='col-lg-3'>
            <div className='invoice_id'>
                <Link to={`/dashboard/PdfInvoice/${_id}`} className="nav-link" >
                    {_id}
                </Link>
            </div>
        </div>
    );
};

export default ManageInvoice;
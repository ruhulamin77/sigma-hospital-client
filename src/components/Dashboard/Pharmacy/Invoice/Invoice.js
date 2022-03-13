import React, { useEffect, useState } from 'react';
import ManageInvoice from './ManageInvoice';
import './Invoice.css'

const Invoice = () => {
    const [invoice, setInvoice] = useState([])

    useEffect(() => {
        fetch('http://localhost:7050/order')
            .then(res => res.json())
            .then(data => setInvoice(data))
    }, [])

    return (
        <section>
            <div className='container'>
                <h1>hello mamu </h1>
                {
                    invoice.map(invoice => <ManageInvoice
                        key={invoice._id}
                        invoice={invoice}
                    >

                    </ManageInvoice>)
                }

            </div>
        </section>
    );
};

export default Invoice;
import React, { useEffect, useState } from 'react';
import './Invoice.css';
import ManageInvoice from './ManageInvoice';

const Invoice = () => {
    const [invoice, setInvoice] = useState([])
    const [searchinvoice, setsearchinvoice] = useState([])

    useEffect(() => {
        fetch('http://localhost:7050/order')
            .then(res => res.json())
            .then(data => {
                setInvoice(data)
                setsearchinvoice(data)

            })
    }, [])

    const handelsearchData = (e) => {
        let search = e.target.value.toLowerCase()
        const invoicedata = invoice?.filter((searceData) => searceData?._id.toLowerCase().includes(search))
        setsearchinvoice(invoicedata)

    }

    return (
        <section>
            <div className='container mt-5'>
                <h1>All Invoice</h1>
                <div className='search-medicen'>
                    <input type="text" onChange={handelsearchData} className='search-option-medicen' placeholder='Search Medicine' />
                </div>
                <div className='row mt-5'>
                    {
                        searchinvoice?.map(invoice => <ManageInvoice
                            key={invoice._id}
                            invoice={invoice}


                        >

                        </ManageInvoice>)
                    }

                </div>

            </div>
        </section>
    );
};

export default Invoice;
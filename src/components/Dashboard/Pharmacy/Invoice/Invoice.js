import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Invoice.css';
import ManageInvoice from './ManageInvoice';

const Invoice = () => {
    const [invoice, setInvoice] = useState([])
    const [searchinvoice, setsearchinvoice] = useState([])

    useEffect(() => {
        fetch('https://shrouded-headland-44423.herokuapp.com/order')
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

                <Table striped bordered hover size="sm" className=' mt-5'>
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Invoice</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchinvoice?.map((invoice, index) => <ManageInvoice
                                key={invoice._id}
                                invoice={invoice}
                                index={index}
                            >
                            </ManageInvoice>)
                        }


                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default Invoice;
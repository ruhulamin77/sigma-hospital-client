import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Medicine.css'
import TableRow from '../TableRow/TableRow';

const Medicine = () => {
    const [medicines, setMedicines] = useState([])
    useEffect(() => {
        fetch("https://shrouded-headland-44423.herokuapp.com/medicine")
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])

    return (
        <div className='container mt-5 mb-5'>
            <div>
                <Table striped bordered hover size="sm" className=' mt-5'>
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>brand</th>
                            <th>Medicine-Name</th>
                            <th>pawer</th>
                            <th>type</th>
                            <th>stock</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicines?.map((medicine, index) => (
                            <TableRow medicine={medicine}
                                key={medicine._id}
                                index={index}

                            ></TableRow>

                        ))}

                    </tbody>
                </Table>
            </div>

        </div >
    );
};

export default Medicine;

import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useGetAppointmentsQuery } from '../../../features/sigmaApi';

const PatientAccess = () => {
    const allApoinments = useGetAppointmentsQuery();
    console.log(allApoinments.data);

    const handleStatus = id => {
        fetch(`http://localhost:7050/patientAccess/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: "Patient's payment has been successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    if (Swal) {
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                    }
                }
            })
    };

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this file!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:7050/deletepatient/${id}`, {
                        method: 'DELETE',
                        headers: { 'content-type': 'application/json' },
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'The Patient has been successfully deleted!',
                                    showConfirmButton: false,
                                    timer: 2000
                                });
                                if (Swal) {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 2000);
                                }
                            }
                        })
                }
            })
    }
    return (
        <div className='p-3'>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Patient Id</th>
                        <th>Patient Name</th>
                        <th>Patient Contact Number</th>
                        <th>Apointment Date</th>
                        <th>Doctor Name</th>
                        <th>Status</th>
                        <th>Delete Patient</th>
                    </tr>
                </thead>
                <tbody>
                    {allApoinments?.data?.map((data, index) => (
                        <tr key={index}>
                            <td>{data._id}</td>
                            <td>{data.firstName} {data.lastName}</td>
                            <td>{data.mobileNumber}</td>
                            <td>{data.date}</td>
                            <td>{data.doctor}</td>
                            <th>
                                {data.status === "pending" ?
                                    <Button className='doctor-update' onClick={() => handleStatus(data._id)}>pending</Button> : "active"}
                            </th>
                            <th><Button className='doctor-delete' onClick={() => handleDelete(data._id)}>Delete</Button></th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default PatientAccess;
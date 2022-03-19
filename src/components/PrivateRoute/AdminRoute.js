import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

export default function AdminRoute() {
    let navigate = useNavigate();
    const admin = useSelector(state => state?.admin?.token)
    return (
        <>
            {admin ? navigate(`/dashboard`) : navigate(`/adminLogin`)};
        </>
    )
}
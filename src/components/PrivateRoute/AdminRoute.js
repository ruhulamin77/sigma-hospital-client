import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'

export default function AdminRoute() {
    const admin = useSelector(state => state?.admin?.token)
    let location = useLocation();
    return (
        <>
            {admin ? <Navigate to="/dashboardload" />: <Navigate to="/adminLogin" state={{ from: location }} />};
        </>
    )
}
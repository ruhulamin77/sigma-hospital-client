import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function PrivateRoute() {
    const user = useSelector(state => state?.user)
    let location = useLocation();
    return (
        <>
            {user?.uid ? <Outlet  /> : <Navigate to="/login" state={{ from: location }} />};
        </>
    )
}
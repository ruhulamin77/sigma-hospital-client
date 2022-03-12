import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function PrivateRoute() {
    const user = JSON.parse(localStorage.getItem('user'))
    let location = useLocation();
    return (
        <>
            {user?.uid ? <Outlet  /> : <Navigate to="/login" state={{ from: location }} />};
        </>
    )
}
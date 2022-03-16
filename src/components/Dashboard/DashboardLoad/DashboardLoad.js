import React from 'react';
import { useSelector } from 'react-redux';
import DashboardMain from '../../Dashboard/DashboardMain/DashboardMain';
import DoctorDashboard from '../DoctorsDashboard/DoctorDashboard';

const DashboardLoad = () => {
    const adminRole = useSelector(state => state?.admin?.role)
    if (adminRole === "admin") {
        return (
            <DashboardMain />
        );
    } else if (adminRole === "doctor") {
        return (
                <h2>i am nurse</h2>
        );
    } else if (adminRole === "nurse") {
        return (
            <div><DoctorDashboard /></div> 
        );
    } else if (adminRole === "pharma"){
        return (
                <div>i am pharmasist</div>
        );
    } else if (adminRole === "recip")
    {
        return (
            <div>i am reciptionist</div>
        );
    }
    else {
        console.log("Dashboard Error");
    }
};

export default DashboardLoad;
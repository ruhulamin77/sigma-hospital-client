import React from 'react';
import { useGetPrescriptionsQuery } from '../../../../../features/sigmaApi';

const AppointedPatient = () => {
    const allPrescription = useGetPrescriptionsQuery();
    console.log(allPrescription?.data);

    return (
        <div>
            safdsfd
        </div>
    );
};

export default AppointedPatient;
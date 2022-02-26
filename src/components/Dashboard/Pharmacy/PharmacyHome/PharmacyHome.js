import React from 'react';
import AddMedicine from '../AddMedicine/AddMedicine';
import Medicine from '../Medicine/Medicine';

const PharmacyHome = () => {
    return (
        <div>
            <AddMedicine></AddMedicine>
            <Medicine />

        </div>
    );
};

export default PharmacyHome;

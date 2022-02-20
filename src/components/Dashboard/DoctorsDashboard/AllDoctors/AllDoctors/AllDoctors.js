import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useGetDoctorsQuery } from '../../../../../features/sigmaApi';
import AddDoctors from '../AddDoctors/AddDoctors';
import SingleCardDoctor from '../SingleCardDoctor/SingleCardDoctor';

const AllDoctors = () => {
    const doctorsCollection = useGetDoctorsQuery() || {};
    console.log(doctorsCollection.data);
    return (
        <div style={{ backgroundColor: "#F4F7F6" }}>
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {doctorsCollection?.data?.map((doc) => (
                        <SingleCardDoctor
                            key={doc._id}
                            doc={doc}
                        ></SingleCardDoctor>
                    ))}
                    <AddDoctors />
                </Row>
            </Container>
        </div>
    );
};

export default AllDoctors;
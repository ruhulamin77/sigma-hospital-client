import React from 'react';
import { Button, Card, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useGetNursesQuery } from '../../../../../features/sigmaApi';
import SingleNurseCard from '../SingleNurseCard/SingleNurseCard';

const AllNurse = () => {
    const allNurse = useGetNursesQuery();
    console.log(allNurse.data);
    if (!allNurse?.data?.length) {
        return <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    };

    return (
        <div style={{ backgroundColor: "#F4F7F6", padding: "20px 0" }}>
            <Container>
                <Row xs={1} sm={2} md={2} lg={3} className="g-4">
                    {allNurse?.data?.map((nurse) => (
                        <SingleNurseCard
                            key={nurse._id}
                            nurse={nurse}
                        ></SingleNurseCard>
                    ))}
                    <Card style={{ width: '10rem', marginLeft: "1rem" }} className='text-center shadow p-3'>
                        <Card.Body className='row'>
                            <div className='my-auto'>
                                <Card.Text className='text-secondary'><b>Add New Nurse</b></Card.Text>
                                <NavLink to="/dashboard/addNurse">
                                    <Card.Text className='adddoctor-icon'><i className="fas fa-plus-circle"></i></Card.Text>
                                </NavLink>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};

export default AllNurse;
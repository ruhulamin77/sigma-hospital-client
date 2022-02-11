import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Share/Header/Header';
import SinglePost from '../SubItems/SinglePost/SinglePost';

const Community = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:7050/commonity')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <>
            <Header />
            <Container className='mt-5'>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>     
                {
                  posts.map(postItem => <SinglePost
                  key={postItem._id}
                  postItem={postItem}
                  ></SinglePost>)
                 }
                </Col> 
              </Row>
            </Container>
        </>
    );
};

export default Community;
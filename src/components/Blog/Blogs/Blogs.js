import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetBlogQuery } from '../../../features/blogApi';
import './Blogs.css';

const Blogs = () => {
    const blogCollection = useGetBlogQuery() || {};
    console.log(blogCollection);
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("http://localhost:7050/Blog").then(res => res.json()).then(result => setBlogs(result))
    }, [])
    console.log(blogs, "problem");

    return (
        <Container>
            <Row xs={1} md={2}>
                {blogs.map(blog => (
                    <Col>
                        <div className="blog-items">
                            <div className="blog-img">
                                <img className='img-fluid' src={`data:image/*;base64,${blog?.photo}`} alt="" />
                            </div>
                            <div className="blogs-info">
                                <span>{blog?.blogType}</span>
                                <p><span>{blog?.date}</span> <span>Admin</span> </p>
                                <Link to={`/blog/${blog?._id}`} ><h3>{blog?.title}</h3></Link>
                                <Link to={`/blog/${blog?._id}`} >Read More</Link>
                            </div>
                        </div>
                    </Col>
                ))
                }
            </Row>
        </Container>
    );
};

export default Blogs;
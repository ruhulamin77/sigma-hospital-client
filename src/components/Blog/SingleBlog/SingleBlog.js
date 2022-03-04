import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../../../features/blogApi';

const SingleBlog = () => {
    const { id } = useParams();
    const [singleBlog, setSingleBlog] = useState([]);
    const blogInfo = useGetBlogQuery();
    console.log(blogInfo);

    useEffect(() => {
        const foundDoctor = blogInfo?.data?.find(doctors => doctors?._id === id);
        setSingleBlog(foundDoctor);
    }, [blogInfo?.data, id]);
    return (
        <Container>
            
        </Container>
    );
};

export default SingleBlog;
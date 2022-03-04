import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../../../features/blogApi';
import backPic from "../../../images/ki-14-1.jpg";
import Footer from '../../Home/Footer/Footer';
import Header from '../../Share/Header/Header';
import './SingleBlog.css'

const SingleBlog = () => {
    const { id } = useParams();
    const [singleBlog, setSingleBlog] = useState([]);
    const blogInfo = useGetBlogQuery();
    console.log(blogInfo);

    useEffect(() => {
        const foundDoctor = blogInfo?.data?.find(doctors => doctors?._id === id);
        setSingleBlog(foundDoctor);
    }, [blogInfo?.data, id]);
    console.log(singleBlog);
    return (
        <>
            <Header />
            <div style={{ background: `url(${backPic})` }} className="backcrumb-my ">

                <nav aria-label="breadcrumb">
                    <h3>{singleBlog?.title}</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>

                        <li className="breadcrumb-item" aria-current="page">{singleBlog?.blogType}</li>

                    </ol>
                </nav>
            </div>
            <Container>

                <Row>

                    <Col md={8}>
                        <div className="Img-blog mb-5">
                            <img className='img-fluid' src={`data:image/*;base64,${singleBlog?.photo}`} alt="" />
                        </div>
                        <div className="single-blog-info">
                            <span className="btn-blog">{singleBlog?.blogType}</span>
                            <br />
                            <h2>{singleBlog?.title}</h2>
                            <p className='admin-info'><span> {singleBlog?.date}</span> <span>Admin</span></p>
                            <p>{singleBlog?.description}</p>
                            <h4>{singleBlog?.subtitle1}</h4>
                            <p>{ singleBlog?.subDescription1}</p>
                            <h4>{singleBlog?.subtitle2}</h4>
                            <p>{ singleBlog?.subDescription2}</p>
                            <h4>{singleBlog?.subtitle3}</h4>
                            <p>{ singleBlog?.subDescription3}</p>
                            <h4>{singleBlog?.subtitle4}</h4>
                            <p>{ singleBlog?.subDescription4}</p>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default SingleBlog;
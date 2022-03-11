import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { useGetBlogQuery } from '../../../features/blogApi';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Share/Header/Header';
import './Blogs.css';
import { format } from 'timeago.js';

const Blogs = () => {
    const blogCollection = useGetBlogQuery() || {};
    console.log(blogCollection);

    return (
        <>
            <Header />
            <Container>
                <Row  className='blog-my g-4' xs={1} md={2}>
                    {blogCollection?.data?.length <= 0 ? <div className='looder'>
                        <ScaleLoader
                            color={"#7093e5"} size={150} />
                    </div> : blogCollection?.data?.map(blog => (


                        <>
                            <Col>

                                <div className="card-design h-100">
                                    <div className="img-design">
                                        <img className="img-fluid" src={`data:image/*;base64,${blog?.photo}`} alt="" />
                                    </div>
                                    <div className="service-card">
                                        <Link className='title-heading text-decoration-none' to={`/blog/${blog?._id}`} ><h2>{blog?.title}</h2></Link>
                                        <p>Published By Admin {format(blog?.date)} </p>
                                        <br />
                                        <p className='blog-des'>{blog?.description}</p>
                                        <Link className='blog-btn text-decoration-none text-white' to={`/blog/${blog?._id}`} >Read More</Link>
                                    </div>
                                </div>

                            </Col>


                            {/* <Col>
                                <div className="blog-items mb-4">
                                    <div className="blog-img mb-4">
                                        <img className='img-fluid' src={`data:image/*;base64,${blog?.photo}`} alt="" />
                                    </div>
                                    <div className="blogs-info">
                                        <span>{blog?.blogType}</span>
                                        <p><span>{blog?.date}</span> <span>Admin</span> </p>
                                        <Link className=' text-decoration-none' to={`/blog/${blog?._id}`} ><h2>{blog?.title}</h2></Link>
                                        <br />
                                        <Link className='btn-blog text-decoration-none text-white' to={`/blog/${blog?._id}`} >Read More</Link>
                                    </div>
                                </div>
                            </Col> */}
                        </>
                    ))
                    }
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Blogs;
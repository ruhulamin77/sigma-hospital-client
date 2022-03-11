import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { GrDislike, GrLike } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../../../features/blogApi';
import backPic from "../../../images/ki-14-1.jpg";
import Footer from '../../Home/Footer/Footer';
import Header from '../../Share/Header/Header';
import './SingleBlog.css';
import { format } from 'timeago.js';

const SingleBlog = () => {
    const { id } = useParams();
    const [loginUser, setLoginUser] = useState(null)
    const [singleBlog, setSingleBlog] = useState([]);
    const [liked, setLiked] = useState([]);
    const [number, setNumber] = useState(Number);

    // const [isLike, setIsLike] = useState([]);
    const blogInfo = useGetBlogQuery();
    const user = useSelector((state) => state.auth.value)

    useEffect(() => {
        axios.get(`https://shrouded-headland-44423.herokuapp.com/users/${user?.email}`).then(res => setLoginUser(res.data))
    }, [user?.email])

    useEffect(() => {
        const foundDoctor = blogInfo?.data?.find(doctors => doctors?._id === id);
        setSingleBlog(foundDoctor);
        setNumber(singleBlog?.likes?.length)
        console.log(foundDoctor?.likes?.length, "length");
        if (foundDoctor?.likes?.length === 0) {
            console.log("if");
            setLiked(false)
        } else {
            foundDoctor?.likes?.includes(loginUser?._id) ? setLiked(true) : setLiked(false)
            console.log("else");
        }


    }, [blogInfo?.data, id, loginUser?._id, singleBlog]);

    // const handleUpdateLike = async (id) => {

    //     console.log(like);
    //     if (number === 0 ) {
    //         console.log("doclike");
    //         const docLike = {
    //             likes: loginUser?._id, 
    //         }
    //         const res = await axios.put(`https://shrouded-headland-44423.herokuapp.com/updateBloglike/${id}`, docLike)
    //         console.log(res.data);
    //         setLiked(true)
    //         setNumber(number + 1)
    //     } else {
    //         console.log(like);
    //         const findIsLike = like.includes(loginUser?._id)
    //         console.log(findIsLike, "findIsLike");
    //         setLiked(findIsLike)
    //         console.log(liked);
    //         if (liked) {
    //             console.log("docUnlike");
    //             const docUnlike = {
    //                 likes: loginUser?._id, 
    //             } 
    //             const res = await axios.put(`https://shrouded-headland-44423.herokuapp.com/updateBlogUnlike/${id}`, docUnlike)
    //             console.log(res.data);
    //             setLiked(false)
    //             setNumber( number - 1)

    //         } else {
    //             console.log("doclike");
    //             const docLike = {
    //                 likes: loginUser?._id, 
    //             }
    //             const res = await axios.put(`https://shrouded-headland-44423.herokuapp.com/updateBloglike/${id}`, docLike)
    //             console.log(res.data);
    //             setNumber(number + 1)
    //             setLiked(true)
    //         }

    //     }
    //     console.log(like);
    //     // const findIsLike = like?.map((item) => item === loginUser?._id)
    //     // setLiked(findIsLike)
    //     // console.log(findIsLike, "findIsLike");
    //     // console.log(findIsLike == false);




    //     // if (like.length === 1) {
    //     //     console.log("docUnlike");
    //     //     const docUnlike = {
    //     //         likes: loginUser?._id, 
    //     //     } 
    //     //     const res = await axios.put(`https://shrouded-headland-44423.herokuapp.com/updateBlogUnlike/${id}`, docUnlike)
    //     //     console.log(res.data);
    //     //     setLiked(null)
    //     // } else {
    //     //     console.log("doclike");
    //     //     const docLike = {
    //     //         likes: loginUser?._id, 
    //     //     }
    //     //     const res = await axios.put(`https://shrouded-headland-44423.herokuapp.com/updateBloglike/${id}`, docLike)
    //     //     console.log(res.data);
    //     //     setLike([...like, res.data])
    //     //     setLiked([0])
    //     // }
    // }
    // console.log(like);

    const handleUpdateLike = async (id) => {
        console.log("doclike");
        const docLike = {
            likes: loginUser?._id,
        }
        const res = await axios.put(`https://shrouded-headland-44423.herokuapp.com/updateBloglike/${id}`, docLike)
        if (res.data) {
            console.log(" if doclike");
            setLiked(true)
            setNumber(number + 1)
        }

    }
    const handleUpdateUnLike = async (id) => {
        console.log("docUnlike");
        const docUnLike = {
            likes: loginUser?._id,
        }
        const res = await axios.put(`https://shrouded-headland-44423.herokuapp.com/updateBlogUnlike/${id}`, docUnLike)
        if (res.data) {
            console.log(res.data.value);
            setNumber(number - 1)
            singleBlog._id === res.data.value?._id ? setLiked(false) : setLiked(true)
            console.log(liked, "handleUpdateUnLike");
        }


    }



    console.log(number);

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
                            {/* <span className="btn-blog">{singleBlog?.blogType}</span> */}
                            <span className="like-icon"> <FaHeart /> {number} people likes this </span>
                            {
                                !liked ? <GrLike className='like' onClick={() => { handleUpdateLike(singleBlog?._id) }} /> : <GrDislike className='like' onClick={() => { handleUpdateUnLike(singleBlog?._id) }} />
                            }

                            <br />
                            <h2>{singleBlog?.title}</h2>
                            <p className='admin-info'><span>{format(singleBlog?.date)}</span><span>by Admin</span></p>
                            <p>{singleBlog?.description} </p>
                            <h4>{singleBlog?.subtitle1}</h4>
                            <p>{singleBlog?.subDescription1}</p>
                            <h4>{singleBlog?.subtitle2}</h4>
                            <p>{singleBlog?.subDescription2}</p>
                            <h4>{singleBlog?.subtitle3}</h4>
                            <p>{singleBlog?.subDescription3}</p>
                            <h4>{singleBlog?.subtitle4}</h4>
                            <p>{singleBlog?.subDescription4}</p>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default SingleBlog;
import axios from "axios";
import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { FaRegAngry } from 'react-icons/fa';
import Rating from "react-rating";
import { useSelector } from "react-redux";
import Header from "../../Share/Header/Header";
import "./review.css";

const Review = () => {
    const user = useSelector((state) => state.auth.value);
    const [rating, setRate] = useState(0)
    const [data, setData] = useState("")

    const handleReview = (e) => {
        e.preventDefault()
        const info = {
            describe: data,
            rating: rating,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
        }
        axios.post("http://localhost:7050/reviewAdd", info)
        console.log(info);

    }
    console.log(user, "user");

    return (
        <>
            <Header />
            <div className='review-section '>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}></Col>
                        <Col lg={6} className="" >
                            <div className="review-form">
                                <div class="one">
                                    <h1 className="re">Give Us Feedback</h1>
                                </div>
                                <form onSubmit={(e) => handleReview(e)} >
                                    <Rating className="reviewRating"
                                        stop={5}
                                        fractions={5}
                                        initialRating={rating}
                                        onChange={(rate) => setRate(rate)}
                                        emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                                            'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                            'fa fa-star-o fa-2x high']}
                                        fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                                            'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                            'fa fa-star fa-2x high']}
                                    />
                                    {
                                        rating <= 2 && rating > 0 ? <p>I hate This <FaRegAngry /></p> : rating <= 4 ? <p>It is Awesome.  <BiHappyHeartEyes /></p> : <p>I just love it.  <BsHeartFill /></p>
                                    }
                                    <textarea placeholder="Describe your experience..." onChange={(e) => setData(e.target.value)} id="" cols="30" rows="10">

                                    </textarea>
                                    <button className="bttn" type="submit">Post</button>
                                </form>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Review;
import React from 'react';
import { Card } from 'react-bootstrap';
import './SinglePost.css'

const SinglePost = (props) => {
    const { displayName, text, comments, img } = props?.postItem;
    return (
        <>
            <Card className='mt-3 p-4'>
                <div className='d-flex justify-content-evenly align-items-center info-width'>
                    <img className='displayImage' src={img} alt="" />
                    <h5>{displayName}</h5>
                </div>
                <Card.Body>{text}</Card.Body>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Write a Comment . . ." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn header-btn" type="button" id="button-addon2">Submit</button>
                </div>        
                <div className='d-flex justify-content-end'>
                    <div className='w-90'>
                        {comments.map(comment =><Card className='mt-3 p-4'><div className='d-flex justify-content-evenly align-items-center w-25'>
                            <img className='displayImage' src={comment?.img} alt="" />
                            <h5>{comment?.displayName}</h5>
                        </div>
                        <Card.Body>{comment?.text}</Card.Body></Card>)
                    }</div>
                </div>
            </Card>  
        </>
    );
};

export default SinglePost;
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "./BlogForm.css";

const BlogForm = () => {
    const [addBlog, setAddBlog] = useState({});
    const [image, setImage] = useState(null);
    const date = new Date().toDateString()
    console.log(date);

    const handleAddBlog = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBlog = { ...addBlog };
        newBlog[field] = value;
        setAddBlog(newBlog);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const likes= Number(0)
        const comments = new Array([])
        const date = new Date()
        console.log(date);

        const formData = new FormData();
        for (const key in addBlog) {
            if (Object.hasOwnProperty.call(addBlog, key)) {
                const element = addBlog[key];
                formData.append(`${key}`, element);
            }
        }
        formData.append('image', image);
        formData.append('likes', likes);
        formData.append('comments',comments);
        formData.append('date', date);

        fetch('https://shrouded-headland-44423.herokuapp.com/addBlog', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        "A Blog has been successfully added!",
                        'success'
                    )
                }
            })
    }

    return (
        <div className="container-contact100">
            <div className="wrap-contact100  container">
                <form className="contact100-form validate-form"onSubmit={handleSubmit}>
                    <span className="contact100-form-title">
                        Write Your Idea
                    </span>
                    <Row>
                        <Col sm={12} md={6} lg={5}>
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Title</span>
                                <input className="input100" type="text" placeholder="Write Your Blog Title" name="title"
                                        onChange={handleAddBlog}
                                        required />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={7}>
                            <div className="wrap-input100">
                                <span className="label-input100">Description</span>
                                <input className="input100" type="text" placeholder="Write Your Blog Description"  name="description"
                                        onChange={handleAddBlog}
                                        required />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={5}>
                            <div className="wrap-input100">
                                <span className="label-input100">Sub Title</span>
                                <input className="input100" type="text"  placeholder="Write Your Blog Sub Title" name="subtitle1" onChange={handleAddBlog}
                                        required  />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={7}>
                            <div className="wrap-input100">
                                <span className="label-input100">Sub Title Description</span>
                                <input className="input100" type="text" placeholder="Enter your Blog Sub Title Description"  name="subDescription1"
                                        onChange={handleAddBlog}
                                        required  />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={5}>
                            <div className="wrap-input100">
                                <span className="label-input100">Sub Title</span>
                                <input className="input100" type="text" placeholder="Write Your Blog Sub Title"  name="subtitle2"
                                        onChange={handleAddBlog}
                                        required  />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={7}>
                            <div className="wrap-input100">
                                <span className="label-input100">Sub Title Description</span>
                                <input className="input100" type="text" placeholder="Enter your Blog Sub Title Description"  name="subDescription2"
                                        onChange={handleAddBlog}
                                        required  />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={5}>
                            <div className="wrap-input100">
                                <span className="label-input100">Sub Title</span>
                                <input className="input100" type="text"  placeholder="Write Your Blog Sub Title"  name="subtitle3"
                                        onChange={handleAddBlog}
                                        required />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={7}>
                            <div className="wrap-input100">
                                <span className="label-input100">Sub Title Description</span>
                                <input className="input100" type="text"  placeholder="Write Your Blog Sub Title Description"  name="subDescription3"
                                        onChange={handleAddBlog}
                                        required  />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={5}>
                            <div className="wrap-input100 validate-input" >
                                <span className="label-input100">Sub Title</span>
                                <input className="input100" type="text"  placeholder="Write Your Blog Sub Title"  name="subtitle4"
                                        onChange={handleAddBlog}
                                         />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={7}>
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Sub Title Description</span>
                                <input className="input100" type="text" placeholder="Write Your Blog Description" name="subDescription4"
                                        onChange={handleAddBlog}
                                         />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={5}>
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Add Blog Image</span>
                                <input className="input100"  placeholder="Add Blog Image" accept='image/*'
                                        name="photo"
                                        type="file"
                                        onChange={e => setImage(e.target.files[0])}
                                         />
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={7}>
                            <div className="wrap-input100 input100-select">
                                <span className="label-input100">Blog Type</span>
                                <div>
                                    <select className="selection-2" name="blogType"
                                        onChange={handleAddBlog}
                                        required>
                                        <option value="Health Care">Health Care</option>
                                        <option value="Eye Care">Eye Care</option>
                                        <option value="Medicine">Medicine</option>
                                    </select>
                                </div>
                                <span className="focus-input100"></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={5}>
                            <div className="container-contact100-form-btn">
                                <div className="wrap-contact100-form-btn">
                                    <div className="contact100-form-bgbtn"></div>
                                    <button type='submit' className="contact100-form-btn">
                                        <span>
                                            Submit
                                            <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
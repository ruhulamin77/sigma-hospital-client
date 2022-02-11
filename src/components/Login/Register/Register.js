import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import Header from '../../Share/Header/Header';
import "./Register.css";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
return (
    <>
        <Header />
        <div className='regi'>
        <h4 className="m-3">New User? Register Here</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
              <h5>Your Image</h5>  
        <input {...register("img")} placeholder="Image url" />
        <h5>First Name</h5>
        <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="First Name" />
        <h5>Last Name</h5>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="Last Name" />
        <h5>Your Email</h5>
        <input {...register("email")} placeholder="Your Email" />
        <h5>Password</h5>
        <input {...register("password")} placeholder="Password" />
        <h5>Confirm Password</h5>
        <input {...register("password2")} placeholder="Confirm Password" />
        <Button>Register</Button>
            <NavLink style={{ textDecoration: 'none' }} to="/login">
                <Button sx={{ width: '75%'}} variant="text">Already User? Please Login</Button>
            </NavLink>
    </form>
    </div>
    </>
    );
};

export default Register;
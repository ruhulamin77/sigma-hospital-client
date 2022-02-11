import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import Header from '../../Share/Header/Header';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
        <Header />
        <div className='regi'>
        <h4 className="m-3">Login Here! </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Your Email</h5>
        <input {...register("email")} placeholder="Your Email" />
        <h5>Password</h5>
        <input {...register("password")} placeholder="Password" />
        <h6 className='mb-2'>Forgot Password? <span>Recovery here</span></h6>
        <Button>Login</Button>
            <NavLink style={{ textDecoration: 'none' }} to="/register">
                <Button sx={{ width: '75%'}} variant="text">New User? Please Register</Button>
            </NavLink>
        -------- OR -------
        <h6 className='mb-2'>Sign in with</h6>
        <div className='log'>
        <div className='mr1'><Button>Google</Button></div>
        <div className='mr2'><Button>Facebook</Button></div>
        <div className='mr3'><Button>Twitter</Button></div>
        </div>
        </form>
        </div>
        </>
    );
};

export default Login;
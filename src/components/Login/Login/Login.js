import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const [classAdd, setClassAdd] = useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <Container className='padding-container'>
            <div className={`con ${classAdd}`} id="container">
                <div className="form-container sign-up-container">
                    <form className='login-form'>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <span className="social"><i className="fab fa-facebook-f"></i></span>
                            <span className="social"><i className="fab fa-google-plus-g"></i></span>
                            <span className="social"><i className="fab fa-linkedin-in"></i></span>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email"  {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && errors.email.type === "required" && <span className='text-danger pt-2  d-inline-block'>Email Address is required</span>}
                        {errors.email && errors.email.type === "pattern" && <span className='text-danger pt-2  d-inline-block'>Please provide a valide Email </span>}
                        <input type="password" placeholder="Password" />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className='login-form'>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <span className="social"><i className="fab fa-facebook-f"></i></span>
                            <span className="social"><i className="fab fa-google-plus-g"></i></span>
                            <span className="social"><i className="fab fa-linkedin-in"></i></span>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <span className='py-2'>Forgot your password?</span>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={() => setClassAdd("")} className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p >Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => setClassAdd("right-panel-active")}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;
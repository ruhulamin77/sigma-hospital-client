import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from "../../../hooks/useFirebase";
import "./Login.css";
import Header from "../../Share/Header/Header"
import Footer from "../../Home/Footer/Footer"

const Login = () => {
    const { loginUser, registerUser, signInWithGoogle } = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();
    const [classAdd, setClassAdd] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const {
        register: register2,
        handleSubmit: handleSubmit2,
        formState: { errors: errors2 },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        registerUser(data?.Email, data?.password, data?.displayName)
    }
    const onSubmit2 = (data) => {
        loginUser(data?.Email, data?.password, location, navigate)
    }


    return (
        <>
            <Header />
            <Container className='padding-container'>
                <div className={`con ${classAdd}`} id="container">
                    <div className="form-container sign-up-container">
                        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <span className="social"><FaFacebookF /></span>
                                <span onClick={() => signInWithGoogle(location, navigate)} className="social"><FaGoogle /></span>
                                <span className="social"><FaTwitter /></span>
                            </div>
                            <span>or use your email for registration</span>
                            <input {...register("displayName", { required: true })} type="text" placeholder="Name" />
                            <input type="email" placeholder="Email"  {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                            <input type="password" placeholder="Password" {...register("password",)} />
                            {errors.password && <span className='text-danger pt-2  d-inline-block'>Please add 8 digit. </span>}
                            {errors.password && errors.password.type === "min" && <span className='text-danger pt-2  d-inline-block'>Please add 8 digit. </span>}
                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={handleSubmit2(onSubmit2)} className='login-form'>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <span className="social"><FaFacebookF /></span>
                                <span onClick={() => signInWithGoogle(location, navigate)} className="social"><FaGoogle /></span>
                                <span className="social"><FaTwitter /></span>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email"  {...register2("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors2.email && errors2.email.type === "required" && <span className='text-danger pt-2  d-inline-block'>Email Address is required</span>}
                            {errors2.email && errors2.email.type === "pattern" && <span className='text-danger pt-2  d-inline-block'>Please provide a valide Email </span>}
                            <input type="password" placeholder="Password" {...register2("password",)} />
                            {errors2.password && "Password is required"}
                            {errors2.password && errors2.password.type === "min" && <span className='text-danger pt-2  d-inline-block'>Please add 8 digit. </span>}
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
            <Footer />
        </>
    );
};

export default Login;
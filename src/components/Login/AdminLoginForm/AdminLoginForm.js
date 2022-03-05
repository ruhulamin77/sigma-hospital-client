import React, { useState } from 'react';
import {adminLogin} from '../../../features/adminSlice'
import {useDispatch} from 'react-redux'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../../Share/Header/Header';
import "./AdminLoginForm.css";

const AdminLoginForm = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const authenticate = (email, pass) => {
        dispatch(adminLogin( email, pass ))
    }
    return (
        <>
            <Header />
            <Container>
              <Row>
                <Col>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                    <Button onClick={()=>authenticate(email, password)} variant="primary" type="submit">
                        Login
                    </Button>
                  </Form>        
                </Col>    
              </Row>
            </Container>        
        </>
    );
};

export default AdminLoginForm;
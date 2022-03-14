import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {useDispatch,} from 'react-redux'
import {adminRegister} from '../../../features/adminSlice'
import './CreateAdmin.css';
import Header from '../../Share/Header/Header';

const CreateAdmin = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => { 
    reset()
    dispatch(adminRegister(data)) 
    };
    return (
        <>
          <Header />
          <Container>
              <Row>
                <h2>Add A Admin Panel Member</h2>    
                <Col lg={6} md={6} xs={12} sm={12}>      
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Admin Name" {...register("adminName", {required: true})} />
                        <input type="email" placeholder="Admin Email" {...register("email", {required: true})} />
                        <select {...register("role", { required: true })}>
                            <option value="admin">admin</option>
                            <option value="doctor">doctor</option>
                            <option value="nurse">nurse</option>
                            <option value="pharma">pharma</option>
                            <option value="recip">recip</option>
                        </select>
                        <input type="password" placeholder="Admin Password" {...register("passWord", {required: true})} />
                        <input type="text" placeholder="Avatar URL" {...register("photoURL", {})} />
                        <Button className='mt-4' type="submit">Add Member</Button>
                    </form>
                  </Col>     
              </Row>      
          </Container>  
        </>
    );
};

export default CreateAdmin;
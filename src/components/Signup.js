import React, {useState} from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Login from './Login';

 export const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

export default function Signup () {
  const {register, handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  });
    
    const handleSignUp = () =>{
      fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    return(
        <div>
            <Form onSubmit={handleSubmit({handleSignUp})}>
  <Row className="mb-3">
  <Form.Group className="mb-3 formulario" controlId="formGridfirstName">
    <Form.Label>First name:</Form.Label>
    <Form.Control placeholder="First name" type="text" name="firstName" {...register('firstName')} />
    {errors.firstName?.type === 'required' && "First Name is required"}
  </Form.Group>

  <Form.Group className="mb-3 formulario" controlId="formGridlastName" >
    <Form.Label>Last name:</Form.Label>
    <Form.Control placeholder="Last name" type="text" name="lastName" {...register('lastName')} />
    {errors.lastName?.type === 'required' && "Last Name is required"}
  </Form.Group>
  </Row>

  <Form.Group className="mb-3 formulario" controlId="formGridusername">
    <Form.Label>Username:</Form.Label>
    <Form.Control placeholder="Username" type="text" name="username" {...register('username')} />
    {errors.username?.type === 'required' && "Username is required"}
  </Form.Group>

  <Form.Group className='formulario' as={Col} controlId="formGridEmail">
      <Form.Label>Email:</Form.Label>
      <Form.Control placeholder="Email" type="email" name="email" {...register('email')} />
      {errors.email?.type === 'required' && "Email is required"}
    </Form.Group>

    <Form.Group className='formulario' as={Col} controlId="formGridPassword">
      <Form.Label>Password:</Form.Label>
      <Form.Control placeholder="Password" type="password" name="password" {...register('password')}/>
      {errors.password?.type === 'required' && "Password is required"}
    </Form.Group>

  <Button className='signupSubmit' variant="primary" type="submit">
    Register
  </Button>
</Form>
        </div>
    )
}
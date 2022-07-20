import React from 'react';
import { Button, Form, Row, Col} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../App.css'


const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

export default function Login () {
  const {register, handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  });

  async function handleLogin() {
    let item = {
      username: "mor_2314",
      password: "83r5^_"
    }
    fetch('https://fakestoreapi.com/auth/login', {
    method:'POST',
    body: JSON.stringify(item)
  })
  .then((res) => console.log("RESPONSE", res))
  .catch((error) => console.log("ERROR", error));
  }
    const onSubmit = (data) =>{
        console.log('DATA', data)
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
  <Row className="mb-3">
  <Form.Group className='formulario' as={Col} controlId="formGridUsername">
    <Form.Label>Username:</Form.Label>
    <Form.Control  type="text" placeholder="Enter username" name='username'{...register('username')} />
    </Form.Group>
    <Form.Group className='formulario' as={Col} controlId="formGridPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control  type="password" placeholder="Password" name="password" {...register('password')}/>
    </Form.Group>
  </Row>
  <Button onClick={handleLogin} className='submitButton' variant="primary" type="submit">
    Login
  </Button>
  </Form>
            
        </div>
    )
}
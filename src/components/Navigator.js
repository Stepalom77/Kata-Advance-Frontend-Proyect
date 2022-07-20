import React from 'react';
import { Navbar, Container, Nav, Button, Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import { getProducts } from './GetItems';

export default function Navigator () {

  let navigate = useNavigate();
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Button className='homeButton' variant="secondary" onClick={() => {
        navigate("/")
    }}>Stephano's Store</Button>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Form.Control type="text" placeholder="Search product"/>
  <Button className='searchButton' type='submit' variant="primary">Search</Button>
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav>
    <Button className='signupButton' variant="secondary" onClick={() => {
        navigate("/signup")
    }}>Signup</Button>
     <Button variant="secondary" onClick={() => {
        navigate("/login")
    }}>Login</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
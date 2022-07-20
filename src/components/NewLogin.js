import React, {useState, useEffect} from 'react';
import { Button, Form, Row, Col} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {useNavigate, useParams} from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getUser } from './GetItems';
import '../App.css'

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  }).required();

  export default function NewSignup() {
    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema)
      });
      const [login, setLogin] = useState(false);
      const [users, setUsers] = useState(false);
      const [user, setUser] = useState([])
      const [admin, setAdmin] = useState(false)
      const {id} = useParams();

      useEffect(() => {
          getUser(id).then((results) => setUsers(results))
      })

      let adminUser = {
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
        phone:'1-570-236-7033',
        admin: true
    }

    
}
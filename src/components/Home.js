import React, {useState, useEffect, useRef} from 'react';
import { Modal, Button, Container, Row, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import '../App.css';
import { getProducts } from './GetItems';
import {Products} from './Products'

export default function Home() {
  const [list, setList]  = useState ([]);
  useEffect(() => {
    getProducts().then((results) => setList(results))
  })
 
  const learnMore = useRef();
  let navigate = useNavigate();
  return ( 
    <div className="Home">
        {list.map((results) =>{
          return(
            
            <Container className='container'>
  <Row>
    <Col xs><Modal.Dialog>
  <Modal.Header>
    <Modal.Title>{results.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <img src={results.image} alt='producto'></img>
  </Modal.Body>
  <Modal.Body>
    <p>Price: {results.price}</p>
  </Modal.Body>
  <Modal.Footer>
    <Button ref={learnMore} variant="primary" onClick={() => {
        navigate(`/about/${results.id}`)
    }}>Details</Button>
  </Modal.Footer>
</Modal.Dialog></Col>
  </Row>
</Container>          
          )
        })}
      </div>
  );
}


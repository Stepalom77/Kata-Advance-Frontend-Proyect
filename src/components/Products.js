import React, {useState, useEffect} from 'react';
  import { Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
  import {useNavigate, useParams} from 'react-router-dom';
  import { getItem } from './GetItems';
  import App from '../App';

export default function Products() {
  const [list, setList]  = useState ([]);
  const {id} = useParams();

  useEffect(() => {
    getItem(id).then((results) => setList(results));
    })
  
  let navigate = useNavigate();
return(
    <div className='d-flex justify-content-center'>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={list.image} />
  <Card.Body>
    <Card.Title>{list.title}</Card.Title>
    <Card.Text>
    {list.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Price: {list.price} </ListGroupItem>
    <ListGroupItem>Category: {list.category} </ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Button variant="secondary" onClick={() => {
        navigate("/")
    }}>Home</Button>
    <Button className='buyButton' variant="primary">Buy</Button>
  </Card.Body>
</Card>
    </div>
)
}
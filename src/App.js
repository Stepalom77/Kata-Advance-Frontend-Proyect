import React from 'react';
import {BrowserRouter as Router,
Routes,
Route,} from 'react-router-dom';
import {useNavigate, useParams} from 'react-router-dom';
import { Modal, Button, Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Navigator from './components/Navigator';
import Products from './components/Products';
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login';

function App() {
  return ( 
  <Router>
    <div className="App">
      <header>
        <Navigator/>
      </header>
      <div>
        
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/:id" element={<Products/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </div>
  </Router>
    
  );
  
}

export default App;

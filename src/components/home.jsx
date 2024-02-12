import React from 'react'
import '../styles/home.css'
import {Button} from 'react-bootstrap';
import background from '../assets/home-back.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
export const Home = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
      // Redirect to the admin login page
      navigate('/admin-login');
  };
  return (
    <div className='container'>
        
<div className='header'>
  <span style={{color:"#bfc0c0",marginLeft:"10%"}}>Y</span>our<span style={{color:"#bfc0c0"}}>Survey</span>
</div>
<div className='survey-quote'>
    <p>
    It is proved by surveys that happiness does not come from love, wealth, or power but the pursuit of attainable goals.
    </p>
</div>
<div className='buttons-home'>
<Button variant="outline-light">Take a Survey</Button>
<Button onClick={handleLoginClick}  variant="outline-light">Admin Login</Button>
</div>
<img src={background} style={{width:"22%"}}/>
    </div>
  )
}
export default Home;

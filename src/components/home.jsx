import React from 'react'
import '../styles/home.css'
import {Button} from 'react-bootstrap';
import background from '../assets/home-back.png'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Home = () => {
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
<Button variant="outline-light">Admin Login</Button>
</div>
<img src={background} style={{width:"22%"}}/>
    </div>
  )
}
export default Home;

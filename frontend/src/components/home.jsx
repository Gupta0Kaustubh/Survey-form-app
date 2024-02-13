import React from 'react'
import '../styles/home.css'
import {Button} from 'react-bootstrap';
import background from '../assets/home-back.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
export const Home = ({response}) => {

  console.log(response);

  const navigate = useNavigate();

  const handleLoginClick = () => {
      // Redirect to the admin login page
      navigate('/admin-login');
  };
  return (
    <div className='container'>
        
<div className='header'>
  <span style={{color:"#bfc0c0"}}>Y</span>our<span style={{color:"#bfc0c0"}}>Survey</span>
</div>
<div className='survey-quote'>
    <p>
    Surveys are like compasses, guiding organizations through the turbulent seas of consumer preferences.
    </p>
</div>
<div className='buttons-home'>
<Button onClick={()=>{navigate("/surveyquestion")}} variant="outline-light">Take a Survey <IoIosArrowForward /> </Button>
<Button onClick={handleLoginClick}  variant="outline-light">Admin Login</Button>
</div>
<img src={background} style={{width:"22%"}}/>
</div>
  )
}
export default Home;

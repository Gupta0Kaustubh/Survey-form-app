// Importing required modules and styles
import React from 'react';
import '../styles/home.css';
import { Button } from 'react-bootstrap';
import background from '../assets/home-back.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

// Home component
export const Home = ({ response }) => {
  // Log the response data to the console
  console.log(response);

  // Using React Router's useNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle redirection to the admin login page
  const handleLoginClick = () => {
    navigate('/admin-login');
  };

  // Render the component
  return (
    <div className='container-fluid' id="homepage">
      {/* Header */}
      <div className='header' >
        <span style={{ color: "#bfc0c0" }}>Y</span>our<span style={{ color: "#bfc0c0" }}>Survey</span>
      </div>
      
      {/* Survey quote */}
      <div className='survey-quote'>
        <p>
          Surveys are like compasses, guiding organizations through the turbulent seas of consumer preferences.
        </p>
      </div>

      {/* Buttons section */}
      <div className='buttons-home'>
        {/* Button to take a survey */}
        <Button onClick={() => { navigate("/topic") }} variant="outline-light">
          Take a Survey <IoIosArrowForward />
        </Button>
        
        {/* Button to navigate to the admin login page */}
        <Button onClick={handleLoginClick} variant="outline-light">
          Admin Login
        </Button>
      </div>

      {/* Background image */}
      <img src={background} style={{ width: "22%" }} alt="background" />
    </div>
  );
};

// Exporting the Home component
export default Home;

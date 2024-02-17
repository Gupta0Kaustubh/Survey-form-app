// Importing required modules and styles
import React, { useState } from 'react';
import '../styles/firstuserinformation.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";

// FirstUserInformation component
const FirstUserInformation = ({ response, setResponse }) => {
  // Using React Router's useNavigate hook for navigation
  const navigate = useNavigate();

  // Variable to hold the response data
  var val = response;

  // Function to update the response state based on input changes
  const valueChange = (e) => {
    if (e.target.id === "name") {
      val[0].name = e.target.value;
    } else if (e.target.id === "mail") {
      val[0].email = e.target.value;
    } else if (e.target.id === "ph") {
      val[0].phone = e.target.value;
    }
    setResponse(val);
  };

  // Render the component
  return (
    <div className='main container-fluid' id="firstuser">
      <h1 className='heading' style={{ color: "white" }}>Survey Form</h1>
      {/* Form for user information */}
      <form onSubmit={() => navigate("/survey")}>
        <table className='table-input'>
          <thead>
            {/* Table rows for user information */}
            <tr className='one'>
              <th className='headin' >Full Name : </th>
              <td>
                <input id="name" onChange={(e) => { valueChange(e) }} type="text" placeholder='Enter your name' required />
              </td>
            </tr>
            <tr className='one'>
              <th className='headin'>Email Address : </th>
              <td>
                <input id="mail" onChange={(e) => { valueChange(e) }} type="email" placeholder='Enter your email id' required />
              </td>
            </tr>
            <tr className='one'>
              <th className='headin'>Phone number : </th>
              <td>
                <input id="ph" onChange={(e) => { valueChange(e) }} type="number" placeholder='Enter your mobile no.' required />
              </td>
            </tr>
          </thead>
        </table>
        {/* Button to proceed to the survey */}
        <div className='buton'>
          <Button className='butto' variant="outline-light" type="submit">
            Proceed <IoIosArrowForward />
          </Button>
        </div>
      </form>
    </div>
  );
};

// Exporting the FirstUserInformation component
export default FirstUserInformation;

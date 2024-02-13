// src/components/AdminLoginPage.jsx
import '../styles/AdminLogin.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
function AdminLoginPage() {
    // Your admin login form and logic go here

  const navigate = useNavigate();
    return (
        <div className='ad-login'>
        <div className='container align-items-center justify-content-center ' style={{paddingTop:"130px"}}>
             <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Comfortaa"></link>
           <Form id= "signup-container" className='p-5 mt-5' style={{color:"white",width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold' style={{fontFamily:"comfortaa"}}>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold' style={{fontFamily:"comfortaa"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button onClick={()=>{navigate("/admin-details")}} variant='btn btn-outline-light' type="submit" style={{borderRadius:"25px"}}>
        Submit
      </Button>
    </Form>
    
         </div>
         </div>
    );
}

export default AdminLoginPage;

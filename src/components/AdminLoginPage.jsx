// src/components/AdminLoginPage.jsx
import '../styles/AdminLogin.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AdminLoginPage() {
    // Your admin login form and logic go here
    return (
        
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
      
      <Button variant='btn btn-outline-light' type="submit">
        Submit
      </Button>
    </Form>
    
         </div>
    );
}

export default AdminLoginPage;

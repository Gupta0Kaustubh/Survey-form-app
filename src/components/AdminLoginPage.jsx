// src/components/AdminLoginPage.jsx

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AdminLoginPage() {
    // Your admin login form and logic go here
    return (
        <div className='container align-items-center justify-content-center ' style={{paddingTop:"130px"}}>
           <Form className='border border-5 p-5 mt-5 rounded' style={{color:"white"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
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

// src/components/AdminLoginPage.jsx
import '../styles/AdminLogin.css'
// src/components/AdminLoginPage.jsx
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {useSupplier} from '../components/warehouse.jsx'
import "react-toastify/dist/ReactToastify.css";
function AdminLoginPage() {
    const supplier = useSupplier();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'kaustubhgupta@jmangroup.com' && password === '600113') {
            supplier.setAllow(true)
            navigate("/admin-details");
        }else  if (username === 'yogeshwarang@jmangroup.com' && password === '600113') {
            supplier.setAllow(true)
          navigate("/admin-details");
          
      } else {
            toast.error('Invalid username or password');
        }
    };

    return (
        <div id="containerLogin">
        <div className='ad-login'>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
            <div className=' align-items-center justify-content-center' style={{ paddingTop: "130px" }}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa" />
                <Form id="signup-container" className='p-5 mt-5' style={{ color: "white", width: "500px" }} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold' style={{ fontFamily: "comfortaa" }}>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold' style={{ fontFamily: "comfortaa" }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant='outline-dark' type="submit" style={{ borderRadius: "25px" }}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        
        </div>
    );
}

export default AdminLoginPage;

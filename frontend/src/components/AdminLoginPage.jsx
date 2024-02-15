import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function AdminLoginPage() {
    // Use the useNavigate hook for programmatic navigation
    const navigate = useNavigate();
    // State variables to manage username and password inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Check if username and password match
        if (username === 'kaustubhgupta@jmangroup.com' && password === '600113') {
            // Navigate to admin details page if credentials are correct
            navigate("/admin-details");
        }else  if (username === 'yogeshwarang@jmangroup.com' && password === '600113') {
          navigate("/admin-details");
      } else {
            toast.error('Invalid username or password');
        }
    };

    return (
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
            <div className='container align-items-center justify-content-center' style={{ paddingTop: "130px" }}>
                {/* Form for admin login */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa" />
                <Form id="signup-container" className='p-5 mt-5' style={{ color: "white", width: "500px" }} onSubmit={handleSubmit}>
                    {/* Username input */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold' style={{ fontFamily: "comfortaa" }}>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    {/* Password input */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold' style={{ fontFamily: "comfortaa" }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    {/* Submit button */}
                    <Button variant='outline-light' type="submit" style={{ borderRadius: "25px" }}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AdminLoginPage;

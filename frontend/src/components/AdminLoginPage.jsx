// Importing required modules and styles
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useSupplier } from '../components/warehouse.jsx';
import "react-toastify/dist/ReactToastify.css";
import '../styles/AdminLogin.css'

// AdminLoginPage component
function AdminLoginPage() {
    // Using custom hook to get supplier information
    const supplier = useSupplier();

    // Hook for navigation in React Router
    const navigate = useNavigate();

    // State to manage username and password inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'kaustubhgupta@jmangroup.com' && password === '600113') {
            supplier.setAllow(true);
            navigate("/admin-details");
        } else if (username === 'yogeshwarang@jmangroup.com' && password === '600113') {
            supplier.setAllow(true);
            navigate("/admin-details");
        } else {
            // Display an error toast for invalid credentials
            toast.error('Invalid username or password');
        }
    };

    // Render the component
    return (
        <div id="containerLogin">
            <div className='ad-login'>
                {/* ToastContainer for displaying notifications */}
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
                    {/* Form for admin login */}
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

                        {/* Submit button */}
                        <Button variant='outline-dark' type="submit" style={{ borderRadius: "25px" }}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

// Exporting the AdminLoginPage component
export default AdminLoginPage;

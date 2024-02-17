// Importing required modules and components
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import '../styles/admin-details.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Products from './Products.jsx';
import { useSupplier } from './warehouse';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// Details component
export const Details = () => {
  // Using custom hook to get supplier information
  const supplier = useSupplier();

  // Hook for navigation in React Router
  const navigate = useNavigate();

  // State to manage display conditions for all feedbacks and product-specific feedbacks
  const [ps, setPs] = useState(false);
  const [af, setAf] = useState(true);

  // State to store fetched data from the backend
  const [data, setData] = useState([]);

  // Fetching data from the backend when the component mounts
  useEffect(() => {
    // Redirect to admin-login if not authenticated
    if (!supplier.allow) {
      navigate("/admin-login");
    }

    // Fetch data from the backend
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:3000/");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  // Function to handle displaying all feedbacks
  const all = () => {
    setAf(true);
    setPs(false);
  };

  // Function to handle displaying product-specific feedbacks
  const specific = () => {
    setAf(false);
    setPs(true);
  };

  // Render the component
  return (
    <>
      {supplier.allow && (
        <>
          {/* Navbar */}
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <div className='header-admin'>
                  <span style={{ color: "#bfc0c0" }}>A</span>dmin
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Button variant="outline-dark" onClick={() => navigate("/")}>Home</Button>
                  <Button variant="outline-dark" className="ms-3" onClick={all}>All feedbacks</Button>
                  <Button variant="outline-dark" className="ms-3" onClick={specific}>Product specific</Button>
                  <Button variant="outline-dark" className="ms-3" onClick={() => navigate("/")}>Logout</Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Main content */}
          <div id="containerdetails" className='container-fluid'>
            <div className='ad-container'>
              {/* Conditionally rendering components based on display states */}
              {ps && <Products data={data} setData={setData} />}
              {af && (
                <main>
                  <div id="accordian" className='container pt-4'>
                    <Accordion defaultActiveKey="1" style={{ width: "80%" }}>
                      {/* Mapping through data to display feedback details */}
                      {data.map((response, index) => (
                        <Accordion.Item className="border" eventKey={parseInt(index)} key={index}>
                          <Accordion.Header>{response.response.name}</Accordion.Header>
                          <Accordion.Body>
                            {/* Details displayed in cards */}
                            {/* ... (Existing Card components) */}
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </main>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

// Exporting the Details component
export default Details;

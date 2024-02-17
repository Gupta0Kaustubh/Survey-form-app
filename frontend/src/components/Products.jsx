// Importing required modules and styles
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useSupplier } from './warehouse';

// Products component
function Products({ data, setData }) {
  // State for controlling modal visibility
  const [show, setShow] = useState(false);
  
  // Custom hook to get supplier information
  const supplier = useSupplier();

  // State to hold the selected product
  const [prod, setProd] = useState();

  // Function to open the modal and set the selected product
  const modal = (p) => {
    setShow(true);
    setProd(p);
  };

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Render the component
  return (
    <div className='d-flex p-4 gap-4 container'>
      <h3>Select a product to view feedbacks</h3>

      {/* Buttons to select different products */}
      <Button onClick={() => { modal("Product 1") }} variant="outline-light">Product 1</Button>
      <Button onClick={() => { modal("Product 2") }} variant="outline-light">Product 2</Button>
      <Button onClick={() => { modal("Product 3") }} variant="outline-light">Product 3</Button>
      <Button onClick={() => { modal("Product 4") }} variant="outline-light">Product 4</Button>

      {/* Modal for displaying feedbacks for the selected product */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{prod}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Accordion to display feedbacks in a collapsible format */}
          <Accordion defaultActiveKey="0">
            {/* Mapping through data to filter and display relevant feedbacks */}
            {data.map((response, index) => (
              response.response.product === prod ? (
                <Accordion.Item className="border" eventKey={parseInt(index)} key={index}>
                  <Accordion.Header>{response.response.name}</Accordion.Header>
                  <Accordion.Body>
                    {/* Details displayed in cards */}
                    {/* ... (Existing Card components) */}
                  </Accordion.Body>
                </Accordion.Item>
              ) : ' '
            ))}
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          {/* Button to close the modal */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// Exporting the Products component
export default Products;

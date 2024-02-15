import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useSupplier } from './warehouse';
import { useNavigate } from 'react-router-dom';

function Products({ data, setData }) {
    const [show, setShow] = useState(false); // State to control modal visibility
    const [prod, setProd] = useState(); // State to store selected product
    const supplier = useSupplier(); // Custom hook to get supplier data
    const navigate = useNavigate();

    // Function to open modal and set selected product
    const modal = (p) => {
        setShow(true);
        setProd(p);
    };

    return (
        <div className='d-flex p-4 gap-4 container'>
            <h3>Select a product to view feedbacks</h3>
            {/* Buttons to select different products */}
            <Button onClick={() => { modal("Product 1") }} variant="outline-light">Product 1</Button>
            <Button onClick={() => { modal("Product 2") }} variant="outline-light">Product 2</Button>
            <Button onClick={() => { modal("Product 3") }} variant="outline-light">Product 3</Button>
            <Button onClick={() => { modal("Product 4") }} variant="outline-light">Product 4</Button>

            {/* Modal to display feedbacks */}
            <Modal show={show} onHide={() => { setShow(false) }} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{prod}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Accordion to display feedbacks */}
                    <Accordion defaultActiveKey="0">
                        {/* Mapping over feedback data */}
                        {data.map((response, index) => (
                            (response.response.product === prod) ? (
                                <Accordion.Item className="border" eventKey={parseInt(index)} key={index}>
                                    <Accordion.Header>{response.response.name}</Accordion.Header>
                                    <Accordion.Body>
                                        {/* Card to display feedback details */}
                                        <Card className='mt-4'>
                                            <Card.Body>Mail</Card.Body>
                                            <Card.Body className='fw-bold'>{response.response.email}</Card.Body>
                                        </Card>
                                        {/* More card components for other feedback fields */}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ) : null
                        ))}
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                    {/* Button to close modal */}
                    <Button variant="secondary" onClick={() => { setShow(false) }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Products;

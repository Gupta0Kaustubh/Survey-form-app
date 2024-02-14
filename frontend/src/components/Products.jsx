import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useSupplier } from './warehouse';

import { useNavigate } from 'react-router-dom';
function Products({data,setData}) {
    
    const [show, setShow] = useState(false);
    const supplier = useSupplier();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [prod,setProd] = useState()
    
    const modal = (p)=>{
        console.log(p)
        setShow(true)
        setProd(p)

    }
  return (
    <div className=' d-flex p-4 gap-4 container'>
        <h3>Select a product to view feedbacks</h3>
        <Button onClick={()=>{modal("Product 1")}} variant="outline-light">Product 1</Button>
        <Modal style={{color:"black"}}show={show} onHide={()=>{setShow(false)}} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{prod}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Accordion defaultActiveKey="0">
            {data.map((response,index) => (response.response.product === prod) ? (
         
         <Accordion.Item className="border" eventKey={parseInt(index)}>
           <Accordion.Header>{response.response.name}</Accordion.Header>
           <Accordion.Body>
           <Card className='mt-4'>
         <Card.Body>Mail</Card.Body>
         <Card.Body className='fw-bold'>{response.response.email}</Card.Body>
       </Card>
       <Card className='mt-4'>
         <Card.Body>Phone number</Card.Body>
         <Card.Body className='fw-bold'>{response.response.phone}</Card.Body>
       </Card>
           <Card className='mt-4'>
         <Card.Body>{supplier.questions[0].question}</Card.Body>
         <Card.Body className='fw-bold'>{response.response.question1}</Card.Body>
       </Card>
       <Card className='mt-4'>
         <Card.Body>{supplier.questions[1].question}</Card.Body>
         <Card.Body className='fw-bold'>{response.response.question2}</Card.Body>
       </Card>
       <Card className='mt-4'>
         <Card.Body>{supplier.questions[2].question}</Card.Body>
         <Card.Body className='fw-bold'>{response.response.question3}</Card.Body>
       </Card>
       <Card className='mt-4'>
         <Card.Body>{supplier.questions[3].question}</Card.Body>
         <Card.Body className='fw-bold'>{response.response.question4}</Card.Body>
       </Card>
       <Card className='mt-4'>
         <Card.Body>{supplier.questions[4].question}</Card.Body>
         <Card.Body className='fw-bold'>{response.response.question5}</Card.Body>
       </Card>
       <Card className='mt-4'>
         <Card.Body>{supplier.questions[5].question}</Card.Body>
         <Card.Body className='fw-bold'>{response.response.question6}</Card.Body>
       </Card>
       <Card className='mt-4'>
         <Card.Body>{supplier.questions[6].question}</Card.Body>
         <Card.Body className='fw-bold'>{response.response.question7}</Card.Body>
       </Card>
       <Card className='mt-4'>
         <Card.Body>{supplier.questions[7].question}</Card.Body>
         <Card.Body className='fw-bold'>{response.response.question8}</Card.Body>
       </Card>    
       <Card className='mt-4'>
         <Card.Body> What recommendations would you offer to improve our product/service?</Card.Body>
         <Card.Body  className='fw-bold'>{response.response.comment}</Card.Body>
       </Card>   
           </Accordion.Body>
         </Accordion.Item>
       
         ) : ' ')}</Accordion>
         </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={()=>{setShow(false)}}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
        <Button onClick={()=>{modal("Product 2")}} variant="outline-light">Product 2</Button>
        <Button onClick={()=>{modal("Product 3")}} variant="outline-light">Product 3</Button>
        <Button onClick={()=>{modal("Product 4")}} variant="outline-light">Product 4</Button>

    </div>
  )
}

export default Products
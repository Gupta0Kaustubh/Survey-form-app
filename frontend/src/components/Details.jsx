import { React, useEffect, useState } from 'react'
import '../styles/admin-details.css'
import { IoEyeSharp } from "react-icons/io5";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useSupplier } from './warehouse';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Products from './Products.jsx';
import {useNavigate} from 'react-router-dom'

export const Details = () => {
  const navigate = useNavigate()
 
const [ps,setPs] = useState(false);
const [af,setAf] = useState(true);
  const supplier = useSupplier();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch("http://127.0.0.1:3000/");

      const data = await response.json();
      setData(data);
      console.log(data)
    };

    fetchData();
  }, []);

 const all =()=>{
  setAf(true);
  setPs(false);
 }
 const specific =()=>{
  setAf(false);
  setPs(true);
  console.log("sf",af,"sf",ps);
 }


  return (

    <div >
    
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><div className='header-admin'>
        <span style={{ color: "#bfc0c0" }}>A</span>dmin
      </div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link  onClick={()=>navigate("/")}>Home</Nav.Link>
          <Nav.Link href="#home" onClick={  all}>All feedbacks</Nav.Link>
          <Nav.Link  onClick={specific}>Product specific</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <div className='ad-container'>  
    {ps && <Products data={data} setData={setData}/>}
    {af&& <main>
      <div id ="accordian" className='container pt-4' >
      <Accordion  defaultActiveKey="1" style={{width:"80%"}}>
      {data.map((response,index) => (
     
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
    
      ))}</Accordion>
      </div>
      </main>}
      
    </div>
    </div>
  );
};

export default Details;

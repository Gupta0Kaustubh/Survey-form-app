import { React, useEffect, useState } from 'react'
import '../styles/admin-details.css'
import { IoEyeSharp } from "react-icons/io5";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useSupplier } from './warehouse';

export const Details = () => {

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



  return (
    <div className='ad-container'>
      <div className='header-admin'>
        <span style={{ color: "#bfc0c0" }}>A</span>dmin
      </div>
      <main>
      <div className='container' >
      <Accordion  defaultActiveKey="1" style={{width: "80%"}}>
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
      </main>
      
    </div>
  )
}
export default Details;

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
      {data.map(response => (
      <Accordion  defaultActiveKey="1" style={{width: "80%",paddingBottom:"10px"}}>
      <Accordion.Item className="border" eventKey="0">
        <Accordion.Header>{response.response.name}</Accordion.Header>
        <Accordion.Body>
        <Card>
      <Card.Body>{supplier.questions[0].question}</Card.Body>
      <Card.Body>{response.response.question1}</Card.Body>
    </Card>
    <Card className='mt-4'>
      <Card.Body>{supplier.questions[1].question}</Card.Body>
      <Card.Body>{response.response.question2}</Card.Body>
    </Card>
    <Card className='mt-4'>
      <Card.Body>{supplier.questions[2].question}</Card.Body>
      <Card.Body>{response.response.question3}</Card.Body>
    </Card>
    <Card className='mt-4'>
      <Card.Body>{supplier.questions[3].question}</Card.Body>
      <Card.Body>{response.response.question4}</Card.Body>
    </Card>
    <Card className='mt-4'>
      <Card.Body>{supplier.questions[4].question}</Card.Body>
      <Card.Body>{response.response.question5}</Card.Body>
    </Card>
    <Card className='mt-4'>
      <Card.Body>{supplier.questions[5].question}</Card.Body>
      <Card.Body>{response.response.question6}</Card.Body>
    </Card>
    <Card className='mt-4'>
      <Card.Body>{supplier.questions[6].question}</Card.Body>
      <Card.Body>{response.response.question7}</Card.Body>
    </Card>
    <Card className='mt-4'>
      <Card.Body>{supplier.questions[7].question}</Card.Body>
      <Card.Body>{response.response.question8}</Card.Body>
    </Card>    
    <Card className='mt-4'>
      <Card.Body> What recommendations would you offer to improve our product/service?</Card.Body>
      <Card.Body>{response.response.comment}</Card.Body>
    </Card>   
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      ))}
      </div>
      </main>
      
    </div>
  )
}
export default Details;

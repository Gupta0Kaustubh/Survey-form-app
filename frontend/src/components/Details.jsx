import { React, useEffect, useState } from 'react'
import '../styles/admin-details.css'
import { IoEyeSharp } from "react-icons/io5";
import Accordion from 'react-bootstrap/Accordion';
export const Details = () => {
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
          <p>How long have you been using our product/service? </p> <p>{response.response.question1}</p>
          
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

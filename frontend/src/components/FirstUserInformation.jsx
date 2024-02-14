import React, { useState } from 'react'
  import '../styles/firstuserinformation.css'
import { BsArrowRightSquareFill } from "react-icons/bs";
import Survey from './Survey';
import { useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";
const FirstUserInformation = ({response,setResponse}) => {
    const navigate = useNavigate()
    var val =response
    const valuechange=(e)=>{
        if (e.target.id=="name"){
            val[0].name=e.target.value
        }else if (e.target.id=="mail"){
            val[0].email=e.target.value
        }else if (e.target.id=="ph"){
            val[0].phone=e.target.value
        }
        setResponse(val)
        console.log(response)
    }
    
  return (
      <div className='main'>
          
          <h1 className='heading' style={{color:"white"}}>Survey Form</h1>
          
          <form onSubmit={()=>navigate("/survey")}>
          <table className='table-input'>
              <thead>
              <tr className='one'>
                  <th className='headin' >Full Name : </th>
                  <td>
                      <input id="name" onChange={(e)=>{valuechange(e)}} type="text" placeholder='Enter your name' required/>
                  </td>
              </tr>
              <tr className='one'>
                  <th className='headin'>Email Address : </th>
                  <td>
                      <input id="mail" onChange={(e)=>{valuechange(e)}} type="email" placeholder='Enter your email id' required/>
                  </td>
              </tr>
              <tr className='one'>
                  <th className='headin'>Phone number : </th>
                  <td>
                      <input id="ph" onChange={(e)=>{valuechange(e)}} type="number"  placeholder='Enter your mobile no.' required/>
                  </td>
              </tr>
              </thead>
          </table>
          <div className='buton'>
          <Button className='butto' variant="outline-light" type="submit"  >
              Proceed  <IoIosArrowForward /></Button>
              </div>
          </form>
    </div>
  )
}

export default FirstUserInformation;

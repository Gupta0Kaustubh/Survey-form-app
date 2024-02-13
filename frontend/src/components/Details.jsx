import {React, useEffect, useState} from 'react'
import '../styles/admin-details.css'
import { IoEyeSharp } from "react-icons/io5";

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
  <span style={{color:"#bfc0c0"}}>A</span>dmin
</div>
<main>
    <div className='users'>
        <p style={{flexGrow:"1",padding:"10px"}} >User-1 </p>
       <p style={{flexGrow:"0",fontSize:"30px"}}> <IoEyeSharp /></p>
    </div>
</main>
    </div>
  )
}
export default Details;

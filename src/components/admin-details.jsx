import React from 'react'
import '../styles/admin-details.css'
import { IoEyeSharp } from "react-icons/io5";
export const Details = () => {
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

import React from 'react'
import './Styles/firstuserinformation.css'
import { BsArrowRightSquareFill } from "react-icons/bs";


const FirstUserInformation = () => {

    function handleClick() {
        window.location.href = '/survey';
    }

  return (
      <div className='main'>
          <h1 className='heading'>Survey Form</h1>
          <table>
              <tr>
                  <th className='headin'>Full Name : </th>
                  <td>
                      <input type="text" placeholder='Enter your name' required/>
                  </td>
              </tr>
              <tr>
                  <th className='headin'>Email Address : </th>
                  <td>
                      <input type="email" placeholder='Enter your email id' required/>
                  </td>
              </tr>
              <tr>
                  <th className='headin'>Phone number : </th>
                  <td>
                      <input type="text" placeholder='Enter your mobile no.' required/>
                  </td>
              </tr>
          </table>
          <div onClick={handleClick} className='arrow'>
              <BsArrowRightSquareFill color='white' fontSize={48} className='arrow' />
          </div>
          
    </div>
  )
}

export default FirstUserInformation;

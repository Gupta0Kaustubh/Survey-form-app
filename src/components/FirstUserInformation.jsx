import React, {useState, useEffect} from 'react'
import './Styles/firstuserinformation.css'
import { BsArrowRightSquareFill } from "react-icons/bs";
import {useNavigate} from "react-router-dom"

const FirstUserInformation = ({setUserFirstResponses, userFirstResponses}) => {

    const [userData, setUserData] = useState({
        fullName: '',
        emailAddress: '',
        phoneNumber: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    }


    function handleClick() {
        console.log(userData);
        const userDataValues = Object.values(userData);
        setUserFirstResponses(prev=>[...prev,userData]);
        window.location.href = '/survey';
    }

    useEffect(() => {
        // Pass userResponses to the callback function
       
        console.log("aaaaaaaaa:",userData)
      }, [ userData]);

  return (
      <div className='main'>
          <h1 className='heading'>Survey Form</h1>
          <table>
          <tbody>
                    <tr>
                        <th className='headin'>Full Name : </th>
                        <td>
                            <input type="text" name="fullName" placeholder='Enter your name' value={userData.fullName} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <th className='headin'>Email Address : </th>
                        <td>
                            <input type="email" name="emailAddress" placeholder='Enter your email id' value={userData.emailAddress} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <th className='headin'>Phone number : </th>
                        <td>
                            <input type="text" name="phoneNumber" placeholder='Enter your mobile no.' value={userData.phoneNumber} onChange={handleChange} required />
                        </td>
                    </tr>
                </tbody>
          </table>
          <div onClick={handleClick} className='arrow'>
              <BsArrowRightSquareFill color='white' fontSize={48} className='arrow' />
          </div>
          
    </div>
  )
}

export default FirstUserInformation;

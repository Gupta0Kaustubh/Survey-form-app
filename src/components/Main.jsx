import React, { useEffect } from 'react'

const Main = ({userResponses, userFirstResponses}) => {
useEffect(()=>{
   console.log("userdata:",userResponses);
  console.log("dadfa:",userFirstResponses);
},[])
 

  return (
    <div>
      {userFirstResponses}
    </div>
  )
}

export default Main
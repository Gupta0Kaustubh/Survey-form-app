import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import '../styles/survey.css'
import { Button } from 'react-bootstrap';
import { FaArrowCircleLeft } from "react-icons/fa";
import { addSurvey } from '../../utils/HandleApi';
import { useSupplier } from './warehouse';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const Survey = ({response,setResponse}) => {
  const supplier = useSupplier();
  const [number, setNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [comment, setComment] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(Array(supplier.questions.length).fill(null));

  const navigate = useNavigate()
  const handleClick = (ind, val) => {

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[number] = ind;
    setSelectedOptions(updatedSelectedOptions);

    var value =response
   
    const selectedOption = supplier.questions[number].options.find(option => option.option === val.option);
    value[0][`question${number + 1}`] = selectedOption.option
    setResponse(value)
    // addSurvey(value)
    console.log(response)
    
   
   setTimeout(()=>{
    const nextQues = number+1;
    if(nextQues < supplier.questions.length){
      setNumber(nextQues)
    }
    else {
      setShowResult(true)
    }},300
   )


  }

  const handleCommentChange = (e) => {
    setComment(e.target.value); // Update textarea content in state
  };

  const goToPreviousQuestion = () => {
    const prevQues = number - 1;
    if (prevQues >= 0) {
      setNumber(prevQues);
    }
  };

  function thankyou() {
    var valuee = response;
    valuee[0].comment = comment; // Append textarea content to response
    setResponse(valuee);
    console.log(response)
    addSurvey(valuee)
    toast.success("Thankyou, Redirecting to Home !");
    setTimeout(()=>{
      navigate("/")
    },3000)
  }

  return (
    <div className='main container-fluid' id='survey-container'>
       <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {showResult === true ? 
        (<div className='submit form'>
          <h1 className='heading' style={{color:"white"}}>Additional Feedback</h1>
            <p className='question'>
            What recommendations would you offer to improve our product/service?
    </p>
    <div className="form-floating">
      <textarea className="form-control textarea" value={comment} onChange={handleCommentChange} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
    </div>
    <Button variant="outline-light" onClick={thankyou} type="button">SUBMIT</Button>
      </div> 
        ) : <div>
          
    
    <div>
      <div className='page_direction'>
     
      <p className='question'>
      {number+1}. {supplier.questions[number].question}
    </p>
    <div className='answers'>
    {supplier.questions[number].options.map((val, ind) => (
     
        
        <Button 
          className={selectedOptions[number] === ind ? 'bgs' : ''}
          variant="outline-light" 
          onClick={() => handleClick(ind, val)}>{val.option}</Button>
      
    ))}
      </div>
      <div className='prev-container'>
  <FaArrowCircleLeft className='prevbutton' style={{color:"white"}}  onClick={goToPreviousQuestion} />
  </div>
      
    
{/*  */}
    
    </div>
    
    </div>
        </div>
    }
 
    </div>
  )
}

export default Survey;
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/survey.css'
import { Button } from 'react-bootstrap';
import { FaArrowCircleLeft } from "react-icons/fa";
import { useSupplier } from './warehouse';


const Survey = ({response,setResponse}) => {
  const supplier = useSupplier();
  const [number, setNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
  const handleClick = (isRight, val) => {

    var value =response
   
    const selectedOption = supplier.questions[number].options.find(option => option.option === val.option);
    value[0][`question${number + 1}`] = selectedOption.option
    setResponse(value)
    console.log(response)
    
    if(isRight === true) {
      setScore(score+1)
    }
    const nextQues = number+1;
    if(nextQues < supplier.questions.length){
      setNumber(nextQues)
    }
    else {
      setShowResult(true)
    }
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
    alert("Thankyou !!! Your form has been submitted successfully !!!");
  }

  return (
    <div className='main'>
      {showResult === true ? 
        (<div className='submit form'>
          <h1 className='heading'>Additional Feedback</h1>
            <div className='question'>
            What recommendations would you offer to improve our product/service?
    </div>
    <div className="form-floating">
      <textarea className="form-control textarea" value={comment} onChange={handleCommentChange} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
    </div>
    <button onClick={thankyou} type="button" className="submit2 btn btn-secondary btn-lg"><Link className='submit1' to="/">SUBMIT FORM</Link></button>
      </div> 
        ) : <div>
          <div>
    <h1 className='heading'>Survey Form</h1>
    <div>
      <div className='page_direction'>
      <div className='quesandans'>
      <div className='question'>
      {number+1}. {supplier.questions[number].question}
    </div>
    <div className='answers'>
    {supplier.questions[number].options.map((val, ind) => (
      <div className='answer' key={ind}>
        <div className='no'>{ind+1}</div>
        <Button className='button' variant="outline-light" onClick={() => handleClick(val.isRight, val)}>{val.option}</Button>{' '}
      </div>
    ))}
      </div>
    </div>
    <div>
      <FaArrowCircleLeft fontSize={40} onClick={goToPreviousQuestion} />
    </div>
      </div>
      
    
    </div>
    
    </div>
        </div>
    }

    </div>
  )
}

export default Survey;
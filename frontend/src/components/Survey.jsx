import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/survey.css'
import { Button } from 'react-bootstrap';
import { FaArrowCircleLeft } from "react-icons/fa";
import { addSurvey } from '../../utils/HandleApi';


const questions = [{
  question: "How long have you been using our product/service?",
  options:[{
    option: "Less than a month",isRight:true
  }, {
    option: "1 to 6 months",isRight:false
  }, {
    option: "6 months to 1 year",isRight:false
  },{
    option: "1-3 years",isRight:false
  },{
    option: "Not sure",isRight:false
  },{
    option: "Never used",isRight:false
  }]
}, {
  question: "Overall, how satisfied are you with our product/service?",
  options:[{
    option: "Very satisfied",isRight:false
  }, {
    option: "Satisfied",isRight:false
  }, {
    option: "Neutral",isRight:true
  },{
    option: "Dissatisfied",isRight:true
  }, {
    option: "Very dissatisfied",isRight:true
  }, {
    option: "Not sure",isRight:true
  }]
},
{
  question: "What was the reason that attracted you to become our customer?",
  options:[{
    option: "Brand value",isRight:false
  }, {
    option: "Marketing and promotion",isRight:true
  }, {
    option: "Variety of products",isRight:false
  }, {
    option: "Word of mouth",isRight:false
  }, {
    option: "Quality of our products",isRight:false
  }, {
    option: "Pricing",isRight:false
  }]
},
{
  question: "What are the reasons for which you might choose our product/service?",
  options:[{
    option: "I already had it, but want to replace it",isRight:false
  }, {
    option: "It serves a need of mine",isRight:true
  }, {
    option: "For quality reasons",isRight:false
  }, {
    option: "For durability reasons",isRight:false
  }, {
    option: "Because of the price",isRight:false
  }, {
    option: "Other",isRight:false
  }]
},
{
  question: "In your opinion, which of the following word describes us/our product the closest?",
  options:[{
    option: "Faulty",isRight:false
  }, {
    option: "Low quality",isRight:true
  }, {
    option: "High quality",isRight:false
  }, {
    option: "Durable",isRight:false
  }, {
    option: "Economical",isRight:false
  }, {
    option: "Expensive",isRight:false
  }]
},
{
  question: "How easy is the transaction process with our company?",
  options:[{
    option: "Very difficult",isRight:false
  }, {
    option: "Difficult",isRight:true
  }, {
    option: "Regular",isRight:false
  }, {
    option: "Easy",isRight:false
  }, {
    option: "Very easy",isRight:false
  }, {
    option: "Other",isRight:false
  }]
},
{
  question: "How likely are you to recommend [Product/Service] to other businesses?",
  options:[{
    option: "Very Likely",isRight:false
  }, {
    option: "Likely",isRight:true
  }, {
    option: "Regular",isRight:false
  }, {
    option: "Unlikely",isRight:false
  }, {
    option: "very unlikely",isRight:false
  }, {
    option: "Other",isRight:false
  }]
},
{
  question: "Did the customer support team resolve all your product/service related queries?",
  options:[{
    option: "Yes, by the company's representative",isRight:false
  }, {
    option: "No, it was resolved by me",isRight:true
  }, {
    option: "No, the problem was never resolved",isRight:false
  }, {
    option: "Never contacted the support team",isRight:false
  }, {
    option: "In process",isRight:false
  }, {
    option: "Other",isRight:false
  }]
}];

const Survey = ({response,setResponse}) => {

  const [number, setNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
  const handleClick = (isRight, val) => {

    var value =response

    const selectedOption = questions[number].options.find(option => option.option === val.option);
    value[0][`question${number + 1}`] = selectedOption.option
    setResponse(value)
    // addSurvey(value)
    console.log(response)
    
    if(isRight === true) {
      setScore(score+1)
    }
    const nextQues = number+1;
    if(nextQues < questions.length){
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
    addSurvey(valuee)
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
      {number+1}. {questions[number].question}
    </div>
    <div className='answers'>
    {questions[number].options.map((val, ind) => (
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
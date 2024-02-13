import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/survey.css'
import { Button } from 'react-bootstrap';
import { FaArrowCircleLeft } from "react-icons/fa";


const questions = [{
  question: "How long have you been using our product/service?",
  options:[{
    option: "Less than a month",
  }, {
    option: "1 to 6 months",
  }, {
    option: "6 months to 1 year",
  },{
    option: "1-3 years",
  },{
    option: "Not sure",
  },{
    option: "Never used",
  }]
}, {
  question: "Overall, how satisfied are you with our product/service?",
  options:[{
    option: "Very satisfied",
  }, {
    option: "Satisfied",
  }, {
    option: "Neutral"
  },{
    option: "Dissatisfied"
  }, {
    option: "Very dissatisfied"
  }, {
    option: "Not sure"
  }]
},
{
  question: "What was the reason that attracted you to become our customer?",
  options:[{
    option: "Brand value",
  }, {
    option: "Marketing and promotion"
  }, {
    option: "Variety of products",
  }, {
    option: "Word of mouth",
  }, {
    option: "Quality of our products",
  }, {
    option: "Pricing",
  }]
},
{
  question: "What are the reasons for which you might choose our product/service?",
  options:[{
    option: "I already had it, but want to replace it",
  }, {
    option: "It serves a need of mine"
  }, {
    option: "For quality reasons",
  }, {
    option: "For durability reasons",
  }, {
    option: "Because of the price",
  }, {
    option: "Other",
  }]
},
{
  question: "In your opinion, which of the following word describes us/our product the closest?",
  options:[{
    option: "Faulty",
  }, {
    option: "Low quality"
  }, {
    option: "High quality",
  }, {
    option: "Durable",
  }, {
    option: "Economical",
  }, {
    option: "Expensive",
  }]
},
{
  question: "How easy is the transaction process with our company?",
  options:[{
    option: "Very difficult",
  }, {
    option: "Difficult"
  }, {
    option: "Regular",
  }, {
    option: "Easy",
  }, {
    option: "Very easy",
  }, {
    option: "Other",
  }]
},
{
  question: "How likely are you to recommend [Product/Service] to other businesses?",
  options:[{
    option: "Very Likely",
  }, {
    option: "Likely"
  }, {
    option: "Regular",
  }, {
    option: "Unlikely",
  }, {
    option: "very unlikely",
  }, {
    option: "Other",
  }]
},
{
  question: "Did the customer support team resolve all your product/service related queries?",
  options:[{
    option: "Yes, by the company's representative",
  }, {
    option: "No, it was resolved by me"
  }, {
    option: "No, the problem was never resolved",
  }, {
    option: "Never contacted the support team",
  }, {
    option: "In process",
  }, {
    option: "Other",
  }]
}];

const Survey = ({response,setResponse}) => {

  const [number, setNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [comment, setComment] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));


  const handleClick = (ind, val) => {

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[number] = ind;
    setSelectedOptions(updatedSelectedOptions);

    var value =response
    const selectedOption = questions[number].options.find(option => option.option === val.option);
    value[0][`question${number + 1}`] = selectedOption.option
    setResponse(value)
    console.log(response)
    
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
        <Button 
          className={selectedOptions[number] === ind ? 'bgs' : ''}
          variant="outline-light" 
          onClick={() => handleClick(ind, val)}>{val.option}</Button>{' '}
      </div>
    ))}
      </div>
    </div>
    <div>
      <FaArrowCircleLeft className='prevbutton' fontSize={40} onClick={goToPreviousQuestion} />
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
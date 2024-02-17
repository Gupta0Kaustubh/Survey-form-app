// Importing required modules and styles
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/survey.css';
import { Button } from 'react-bootstrap';
import { FaArrowCircleLeft } from "react-icons/fa";
import { addSurvey } from '../../utils/HandleApi';
import { useSupplier } from './warehouse';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Survey component
const Survey = ({ response, setResponse }) => {
  // Custom hook to get supplier information
  const supplier = useSupplier();

  // States for managing the survey flow
  const [number, setNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [comment, setComment] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(Array(supplier.questions.length).fill(null));

  // React Router's useNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle button click for selecting options
  const handleClick = (ind, val) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[number] = ind;
    setSelectedOptions(updatedSelectedOptions);

    var value = response;
    const selectedOption = supplier.questions[number].options.find(option => option.option === val.option);
    value[0][`question${number + 1}`] = selectedOption.option;
    setResponse(value);

    setTimeout(() => {
      const nextQues = number + 1;
      if (nextQues < supplier.questions.length) {
        setNumber(nextQues);
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  // Function to handle textarea content change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Function to go to the previous question
  const goToPreviousQuestion = () => {
    const prevQues = number - 1;
    if (prevQues >= 0) {
      setNumber(prevQues);
    }
  };

  // Function to handle the submission and redirection
  const thankyou = () => {
    var valuee = response;
    valuee[0].comment = comment;
    setResponse(valuee);
    addSurvey(valuee);
    toast.success("Thank you! Redirecting to Home!");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  // Render the component
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

      {showResult === true ? (
        // Display additional feedback form after completing the survey questions
        <div className='submit form'>
          <h1 className='heading' style={{ color: "white" }}>Additional Feedback</h1>
          <p className='question'>
            What recommendations would you offer to improve our product/service?
          </p>
          <div className="form-floating">
            <textarea className="form-control textarea" value={comment} onChange={handleCommentChange} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          </div>
          <Button variant="outline-light" onClick={thankyou} type="button">SUBMIT</Button>
        </div>
      ) : (
        // Display survey questions
        <div>
          <div>
            <div className='page_direction'>
              {/* Display the current survey question */}
              <p className='question'>
                {number + 1}. {supplier.questions[number].question}
              </p>

              {/* Display answer options as buttons */}
              <div className='answers'>
                {supplier.questions[number].options.map((val, ind) => (
                  <Button
                    className={selectedOptions[number] === ind ? 'bgs' : ''}
                    variant="outline-light"
                    onClick={() => handleClick(ind, val)}>{val.option}</Button>
                ))}
              </div>

              {/* Display previous button */}
              <div className='prev-container'>
                <FaArrowCircleLeft className='prevbutton' style={{ color: "white" }} onClick={goToPreviousQuestion} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Exporting the Survey component
export default Survey;

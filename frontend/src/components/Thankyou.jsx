import React, { useState, useEffect } from 'react'
import '../styles/thankyou.css'

const Thankyou = () => {
    const [currentSection, setCurrentSection] = useState(1);
 
    useEffect(() => {
      const section = document.getElementById(`section-${currentSection}`);
   
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, [currentSection]);
   
    const handleOptionClick = () => {
      setCurrentSection(currentSection === 1 ? 2 : 1);
    };
   
    return (
      <div>
        <div id={`section-1`} className="section">
          <h1>Section One</h1>
          <div className="options">
          <button onClick={handleOptionClick}>Next </button>
        </div>
        </div>
        <div id={`section-2`} className="section">
          <h1>Section Two</h1>
          <div className="options">
          <button onClick={handleOptionClick}>Next</button>
        </div>
        </div>
      </div>
    );
  };

export default Thankyou
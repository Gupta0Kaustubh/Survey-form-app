import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import
import Survey from './components/Survey';
import Main from './components/Main';
import FirstUserInformation from './components/FirstUserInformation';

function App() {


  const [userResponses, setUserResponses] = useState([]);
  const [userFirstResponses, setUserFirstResponses] = useState([]);

  // Define a function to update userResponses
  const updateUserResponses = (responses) => {
    setUserResponses(responses);
  };
  // Define a function to update userFirstResponses

  
  // useEffect(() => {
  //   const concatResponses = () => {
  //     const concatenatedResponses = [...userFirstResponses, ...userResponses];
  //     // Update state with the concatenated array
  //     setUserResponses(concatenatedResponses);
  //   };
  //   concatResponses();
  // }, []);

  useEffect(() => {
    console.log("User Responses:", userResponses);
    console.log("User First Responses:", userFirstResponses);
  }, []);

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main userResponses={userResponses} userFirstResponses={userFirstResponses} />} />
          <Route exact path="/firstuserinformation" element={<FirstUserInformation setUserFirstResponses={setUserFirstResponses} userFirstResponses={userFirstResponses}/>} />
          <Route exact path="/survey" element={<Survey updateUserResponses={updateUserResponses} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


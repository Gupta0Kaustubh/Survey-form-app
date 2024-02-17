// Importing required modules and components
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

// Importing components
import Home from './components/home.jsx';
import AdminLoginPage from './components/AdminLoginPage.jsx';
import Details from './components/Details.jsx';
import FirstUserInformation from './components/FirstUserInformation.jsx';
import Survey from './components/Survey.jsx';
import { Warehouse } from './components/warehouse.jsx';
import Topic from './components/Topic.jsx';

// Main App component
function App() {
  // State to manage survey response data
  const [response, setResponse] = useState([
    {
      product: "",
      name: "",
      email: "",
      phone: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      comment: ""
    }
  ]);

  // State to manage if data submission is allowed
  const [allow, setAllow] = useState(false);

  // Function to send survey data to the backend
  const sendDataToBackend = async () => {
    try {
      const responseFromBackend = await axios.post('/api/survey', response);
      console.log('Response from backend:', responseFromBackend.data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  // Render the component
  return (
    <>
      {/* Router setup */}
      <Router>
        {/* Warehouse component as a layout wrapper */}
        <Warehouse>
          {/* Routes setup */}
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Home response={response} />} />
            {/* Admin login route */}
            <Route path="/admin-login" element={<AdminLoginPage />} />
            {/* Admin details route */}
            <Route path="/admin-details" element={<Details response={response} />} />
            {/* Topic route */}
            <Route path="/topic" element={<Topic response={response} setResponse={setResponse} />} />
            {/* Survey route */}
            <Route path="/survey" element={<Survey response={response} setResponse={setResponse} />} />
            {/* Survey question route */}
            <Route path="/surveyquestion" element={<FirstUserInformation response={response} setResponse={setResponse} />} />
            {/* ... Other routes */}
          </Routes>
        </Warehouse>
      </Router>
    </>
  );
}

// Exporting the App component
export default App;

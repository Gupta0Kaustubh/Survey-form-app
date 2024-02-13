import Home from './components/home.jsx'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './components/AdminLoginPage.jsx';
import Details from './components/Details.jsx'
import FirstUserInformation from './components/FirstUserInformation.jsx'
import Survey from './components/Survey.jsx';
import {React, useState} from 'react'
function App() {
  const [response,setResponse] = useState([{
    name: "name",
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
        }])
  
  return (
    <>
    <Router>
            <Routes>
                {/* Other routes */}
                <Route path="/" element={<Home response={response}/>}/>
                <Route path="/admin-login" element={<AdminLoginPage />} />
                <Route path="/admin-details" element={<Details/>}/>
                <Route path="/survey" element={<Survey response={response} setResponse={setResponse} />}/>
                <Route path="/surveyquestion" element={<FirstUserInformation response={response} setResponse={setResponse}/>}/>
                {/* ... */}
            </Routes>
        </Router>
    </>
  )
}

export default App

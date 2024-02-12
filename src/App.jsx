import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import
import Survey from './components/Survey';
import Main from './components/Main';
import FirstUserInformation from './components/FirstUserInformation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/firstuserinformation" element={<FirstUserInformation />} />
          <Route exact path="/survey" element={<Survey />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import
import Survey from './components/Survey';
import Main from './components/Main';
import Thankyou from './components/Thankyou';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/survey" element={<Survey />} />
          <Route exact path="/thankyou" element={<Thankyou />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

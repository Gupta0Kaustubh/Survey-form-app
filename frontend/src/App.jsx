import Home from './components/home.jsx'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './components/AdminLoginPage.jsx';
import Details from './components/Details.jsx'
function App() {
  return (
    <>
    <Router>
            <Routes>
                {/* Other routes */}
                <Route path="/" element={<Home/>}/>
                <Route path="/admin-login" element={<AdminLoginPage />} />
                <Route path="/admin-details" element={<Details/>}/>
                {/* ... */}
            </Routes>
        </Router>
    </>
  )
}

export default App

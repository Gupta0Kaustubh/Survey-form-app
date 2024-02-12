import Home from './components/home.jsx'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './components/AdminLoginPage.jsx';
function App() {
  return (
    <>
    <Router>
            <Routes>
                {/* Other routes */}
                <Route path="/" element={<Home/>}/>
                <Route path="/admin-login" element={<AdminLoginPage />} />
                {/* ... */}
            </Routes>
        </Router>
    </>
  )
}

export default App

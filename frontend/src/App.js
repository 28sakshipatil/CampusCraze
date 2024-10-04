import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Login from './SignUp/Login';
// import Navbar from './Components/Navbar';
import HomePage from './Components/landingPage/homepage/HomePage';


function App() {
  return (
    <>
    
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </Router>
    </>
    
   
   
  );
}

export default App;

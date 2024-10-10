import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Login from './SignUp/Login';
// import Navbar from './Components/Navbar';
import HomePage from './Components/landingPage/homepage/HomePage';
import AboutPage from './Components/about/AboutPage';
import EventPage from './Components/events/EventPage';
import TicketPage from './Components/tickets/TicketPage';
import TeamPage from './Components/team/TeamPage';


function App() {
  return (
    <>
    
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element ={<AboutPage />}  />
        <Route path="/event" element={<EventPage />} />
        <Route path="/ticket" element={<TicketPage />}/>
        <Route path="/team" element={<TeamPage />} />

      </Routes>
    </Router>
    </>
    
   
   
  );
}

export default App;

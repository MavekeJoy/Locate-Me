// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FindMe from './pages/FindMe';
import PostMe from './pages/PostMe';
import SignIn from './pages/SignIn';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MobileBottomNav  from './components/MobileBottomNav';
function App() {
  return (
    <Router>
      <Navbar />
      <div className= "pt-10">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find" element={<FindMe />} />
        <Route path="/post" element={<PostMe />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <MobileBottomNav />
      </div>
    </Router>
  );
}

export default App;

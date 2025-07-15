// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FindMe from './pages/FindMe';
import PostMe from './pages/PostMe';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MobileBottomNav  from './components/MobileBottomNav';
import Support from './pages/Support';
function App() {
  return (
    <Router>
      <Navbar />
      <div className= "pt-10">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find" element={<FindMe />} />
        <Route path="/post" element={<PostMe />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <MobileBottomNav />
      </div>
    </Router>
  );
}

export default App;

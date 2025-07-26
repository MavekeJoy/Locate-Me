// src/pages/SplashScreen.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'; // Make sure this logo exists

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Goes to login after 5 seconds
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <img
  src={logo}
  alt="App Logo"
  className="w-80 h-80 animate-zoom-in-out"
/>

    </div>
  );
};

export default SplashScreen;

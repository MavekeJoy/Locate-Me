// src/pages/SplashScreen.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { useTheme } from '../context/ThemeContext';

const SplashScreen = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landing'); // Navigate after 5 seconds
    }, ); // Remove the time to prevent unnecessary loading 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <img
        src={logo}
        alt="App Logo"
        className="w-80 h-80 md:w-80 md:h-80 animate-zoom-in-out"
      />
      <h1 className="mt-6 text-3xl md:text-4xl font-bold font-bebas tracking-wide animate-zoomIn">
        LOCATE ME
      </h1>
    </div>
  );
};

export default SplashScreen;

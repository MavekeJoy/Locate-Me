// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../assets/error.jpg'; // ✅ Internal asset image

const NotFound = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${errorImage})` }}
    >
      
        
        <Link
          to="/"
          className="inline-block px-6 py-3 border border-blue-400 bg-blue-500  rounded-full hover:bg-blue-700 hover:text-black transition"
        >
          Go to Home
        </Link>
      </div>
  
  );
};

export default NotFound;

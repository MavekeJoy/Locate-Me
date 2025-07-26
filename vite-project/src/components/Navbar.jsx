// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMapMarkerAlt, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  // On first render, ensure theme matches saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setDarkMode(enabled);
    document.documentElement.classList.toggle('dark', enabled);
  }, []);

  const navLink = (path, label) => (
    <Link
      to={path}
      onClick={() => setMenuOpen(false)}
      className={`block md:inline px-4 py-2 rounded-full transition font-medium ${
        location.pathname === path
          ? 'bg-yellow-400 text-gray-900'
          : 'text-gray-200 hover:bg-yellow-300 hover:text-gray-900'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-gray-900/90 backdrop-blur shadow-md text-white fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          to="/landing"
          className="flex items-center gap-2 text-xl font-bold text-yellow-400 hover:text-yellow-300 transition"
        >
          <FaMapMarkerAlt className="text-2xl" />
          <span className="text-2xl font-bold">Locate Me</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLink('/home', 'Home')}
          {navLink('/find', 'Find Me')}
          {navLink('/post', 'Post Me')}
          {navLink('/settings', 'Settings')}
          {navLink('/support', 'Support')}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition"
            title="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle (mobile) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition"
            title="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
      
        </div>
      </div>

    </nav>
  );
};

export default Navbar;

// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMapMarkerAlt, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  // Theme-based dynamic styles
  const navbarBase =
    theme === 'dark'
      ? 'bg-gray-900 text-white'
      : 'bg-white text-gray-900';

  const linkBase = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';

  const navLink = (path, label) => (
    <Link
      to={path}
      onClick={() => setMenuOpen(false)}
      className={`block md:inline px-4 py-2 rounded-full transition font-medium ${
        location.pathname === path
          ? 'bg-yellow-400 text-gray-900'
          : `${linkBase} hover:bg-yellow-300 hover:text-gray-900`
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur shadow-md transition-colors duration-300 ${navbarBase}`}>
      <div className="flex justify-between items-center px-6 py-3">
       
        <Link
          to="/landing"
          className="flex items-center gap-2 text-xl font-bold text-yellow-400 hover:text-yellow-300 transition"
        >
          <FaMapMarkerAlt className="text-2xl" />
          <span className="text-2xl font-bold">Locate Me</span>
        </Link>

        {/* Desktop Nav Links */}
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
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Theme Toggle Only */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

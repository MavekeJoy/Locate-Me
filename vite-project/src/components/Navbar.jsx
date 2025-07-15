// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (path, label) => (
    <Link
      to={path}
      onClick={() => setMenuOpen(false)}
      className={`block md:inline px-3 py-2 rounded-full transition font-medium ${
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
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-yellow-400 hover:text-yellow-300 transition"
        >
          <FaMapMarkerAlt />
          <span>Locate Me</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLink('/home', 'Home')}
          {navLink('/find', 'Find Me')}
          {navLink('/post', 'Post Me')}
          {navLink('/settings', 'Settings')}
          {navLink('/support', 'Support')}
         
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {navLink('/home', 'Home')}
          {navLink('/find', 'Find Me')}
          {navLink('/post', 'Post Me')}
          {navLink('/settings', 'Settings')}
          {navLink('/support', 'Support')}
          <Link
            to="/signin"
            onClick={() => setMenuOpen(false)}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

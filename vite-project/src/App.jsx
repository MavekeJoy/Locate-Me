// src/components/admin/AdminTopbar.jsx
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminTopbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setDarkMode(enabled);
    document.documentElement.classList.toggle('dark', enabled);
  }, []);

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-gray-900 text-white flex items-center justify-between px-4 shadow-md">
      {/* Left side: Logo */}
      <div className="flex items-center gap-2 text-yellow-400 font-bold text-lg">
        <FaMapMarkerAlt />
        <span>Locate Me</span>
      </div>

      {/* Right side: Theme toggle & profile */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition"
          title="Toggle Theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        
        {/* ✅ Clickable profile icon linking to /admin/profile */}
        <Link
          to="/admin/profile"
          className="w-9 h-9 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center font-bold hover:bg-yellow-300"
          title="Go to Profile"
        >
          RW
        </Link>
      </div>
    </header>
  );
};

export default AdminTopbar;

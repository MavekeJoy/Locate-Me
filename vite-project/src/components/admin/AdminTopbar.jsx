// src/components/admin/AdminTopbar.jsx
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaSun, FaMoon, FaUserCircle } from 'react-icons/fa';

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
    <header className="fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white px-4 md:px-6 shadow-md z-30 flex items-center justify-between md:pl-64">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 text-xl font-bold text-yellow-400">
        <FaMapMarkerAlt className="text-2xl" />
        <span className="hidden sm:inline">Locate Me</span>
      </div>

      {/* Right: Theme Toggle & Profile */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition"
          title="Toggle Theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <div className="w-9 h-9 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center font-bold">
          RW
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;

// src/components/admin/AdminTopbar.jsx
import React from 'react';
import { FaMapMarkerAlt, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext'; // ✅ Use shared theme

const AdminTopbar = () => {
  const { theme, toggleTheme } = useTheme(); // ✅

  return (
    <header
      className={`md:hidden fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-4 shadow-md transition duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Left: Icon + Label */}
     
      <Link
  to="/landing"
  className="flex items-center gap-2 font-bold text-lg text-yellow-400 hover:underline cursor-pointer"
>
  <FaMapMarkerAlt />
  <span>Locate Me</span>
</Link>
    
      {/* Right: Theme Toggle + Profile */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        
        <Link
          to="/admin/profile"
          title="Profile"
          className="w-9 h-9 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center font-bold hover:bg-yellow-300"
        >
          RW
        </Link>
      </div>
    </header>
  );
};

export default AdminTopbar;

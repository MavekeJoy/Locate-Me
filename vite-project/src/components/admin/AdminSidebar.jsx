// src/components/AdminSidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaCogs,
  FaSignOutAlt,
  FaBell
} from 'react-icons/fa';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition text-sm font-medium ${
      isActive
        ? 'bg-yellow-400 text-gray-900'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <div className="h-screen bg-gray-900 text-white w-64 fixed top-0 left-0 flex flex-col justify-between p-6 shadow-lg z-40">
      {/* Logo */}
      <div>
        <div className="text-2xl font-bold text-yellow-400 mb-8">Locate Admin</div>

        {/* Nav Links */}
        <nav className="space-y-2">
          <NavLink to="/admin" end className={linkClass}>
            <FaTachometerAlt />
            Dashboard
          </NavLink>
          <NavLink to="/admin/submissions" className={linkClass}>
            <FaFileAlt />
            Submissions
          </NavLink>
          <NavLink to="/admin/users" className={linkClass}>
            <FaUsers />
            Users
          </NavLink>
          <NavLink to="/admin/notifications" className={linkClass}>
            <FaBell />
            Notifications
          </NavLink>
          <NavLink to="/admin/settings" className={linkClass}>
            <FaCogs />
            Settings
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 w-full"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

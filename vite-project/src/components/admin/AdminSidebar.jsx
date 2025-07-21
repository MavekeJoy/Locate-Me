// src/components/AdminSidebar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaCogs,
  FaSignOutAlt,
  FaBell,
  FaUserCircle,
} from 'react-icons/fa';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const [notifications] = useState([
    { id: 1, message: 'New submission received', isRead: false },
    { id: 2, message: 'User reported an issue', isRead: false },
    { id: 3, message: 'System update', isRead: true },
  ]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleLogout = () => {
    navigate('/');
  };

  const linkClass = ({ isActive }) =>
    `flex items-center justify-between px-4 py-3 rounded-lg transition text-sm font-medium ${
      isActive
        ? 'bg-yellow-400 text-gray-900'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <div className="h-screen bg-gray-900 text-white w-64 fixed top-0 left-0 flex flex-col justify-between p-6 shadow-lg z-40">
      {/* Logo */}
      <div>
        <div className="text-2xl font-bold text-yellow-400 mb-6">Locate Admin</div>

        {/* Nav Links */}
        <nav className="space-y-2">
          <NavLink to="/admin/profile" className={linkClass}>
            {() => (
              <div className="flex items-center gap-3 w-full">
                <FaUserCircle />
                <span>My Profile</span>
              </div>
            )}
          </NavLink>

          <NavLink to="/admin" end className={linkClass}>
            {() => (
              <div className="flex items-center gap-3 w-full">
                <FaTachometerAlt />
                <span>Dashboard</span>
              </div>
            )}
          </NavLink>

          <NavLink to="/admin/submissions" className={linkClass}>
            {() => (
              <div className="flex items-center gap-3 w-full">
                <FaFileAlt />
                <span>Submissions</span>
              </div>
            )}
          </NavLink>

          <NavLink to="/admin/users" className={linkClass}>
            {() => (
              <div className="flex items-center gap-3 w-full">
                <FaUsers />
                <span>Users</span>
              </div>
            )}
          </NavLink>

          <NavLink to="/admin/notifications" className={linkClass}>
            {() => (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <FaBell />
                  <span>Notifications</span>
                </div>
                {unreadCount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
            )}
          </NavLink>

          <NavLink to="/admin/settings" className={linkClass}>
            {() => (
              <div className="flex items-center gap-3 w-full">
                <FaCogs />
                <span>Settings</span>
              </div>
            )}
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

// src/components/AdminSidebar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate,Link} from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaCogs,
  FaSignOutAlt,
  FaBell,
  FaUserCircle,
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [notifications] = useState([
    { id: 1, message: 'New submission received', isRead: false },
    { id: 2, message: 'User reported an issue', isRead: false },
    { id: 3, message: 'System update', isRead: true },
  ]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleLogout = () => {
    navigate('/'); // Redirect to landing/user interface
  };

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const hoverBg = theme === 'dark' ? 'hover:bg-gray-700 hover:text-white' : 'hover:bg-gray-200 hover:text-gray-900';
  const activeLink = theme === 'dark' ? 'bg-yellow-400 text-gray-900' : 'bg-yellow-300 text-gray-900';

  const linkClass = ({ isActive }) =>
    `flex items-center justify-between px-4 py-3 rounded-lg transition text-sm font-medium ${
      isActive ? activeLink : `${textColor} ${hoverBg}`
    }`;

  return (
    <div className={`hidden md:flex h-screen ${bgColor} ${textColor} w-64 fixed top-0 left-0 flex-col justify-between p-6 shadow-lg z-40 transition-all duration-300`}>
    
      <div>
         <Link
          to="/landing"
          className="flex items-center gap-2 text-xl font-bold text-yellow-400 hover:text-yellow-300 transition"
        >
         
          <span className="text-2xl font-bold">Locate Me</span>
        </Link>

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

      {/* Logout Button */}
      <div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 w-full transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

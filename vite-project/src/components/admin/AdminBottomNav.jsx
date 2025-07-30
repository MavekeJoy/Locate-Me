import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaCog, FaBell, FaUserFriends } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const AdminBottomNav = () => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-yellow-300' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const activeColor = theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500';

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full ${bgColor} ${textColor} border-t ${borderColor} flex justify-around items-center py-3 z-50 md:hidden transition-all duration-300`}
    >
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? activeColor : ''}`
        }
      >
        <FaHome className="text-lg mb-1" />
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/submissions"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? activeColor : ''}`
        }
      >
        <FaUsers className="text-lg mb-1" />
        Submissions
      </NavLink>

      <NavLink
        to="/admin/users"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? activeColor : ''}`
        }
      >
        <FaUserFriends className="text-lg mb-1" />
        Users
      </NavLink>

      <NavLink
        to="/admin/notifications"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? activeColor : ''}`
        }
      >
        <FaBell className="text-lg mb-1" />
        Alerts
      </NavLink>

      <NavLink
        to="/admin/settings"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? activeColor : ''}`
        }
      >
        <FaCog className="text-lg mb-1" />
        Settings
      </NavLink>
    </nav>
  );
};

export default AdminBottomNav;

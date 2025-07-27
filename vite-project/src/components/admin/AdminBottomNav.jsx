// src/components/admin/AdminBottomNav.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaBell,
  FaCogs,
} from 'react-icons/fa';

const AdminBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <FaTachometerAlt /> },
    { name: 'Users', path: '/admin/users', icon: <FaUsers /> },
    { name: 'Submissions', path: '/admin/submissions', icon: <FaFileAlt /> },
    { name: 'Notifications', path: '/admin/notifications', icon: <FaBell /> },
    { name: 'Settings', path: '/admin/settings', icon: <FaCogs /> },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-40">
      <div className="flex justify-between items-center px-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={`w-full flex flex-col items-center justify-center py-2 text-xs ${
              location.pathname === item.path ? 'text-yellow-400' : 'text-gray-400'
            }`}
          >
            <div className="text-lg">{item.icon}</div>
            <span className="text-[10px] mt-1">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default AdminBottomNav;

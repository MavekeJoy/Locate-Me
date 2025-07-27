// src/components/admin/AdminBottomNav.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaBell,
  FaUserCircle,
  FaCogs
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
    <nav className="fixed bottom-0 w-full bg-gray-800 text-white border-t border-gray-700 z-50 md:hidden">
      <div className="flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`w-full flex flex-col items-center justify-center py-2 text-xs ${
              location.pathname === item.path
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            <span className="mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AdminBottomNav;

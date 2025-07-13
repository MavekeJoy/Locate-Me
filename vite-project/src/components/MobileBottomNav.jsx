// components/MobileBottomNav.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaPlusCircle, FaSearch, FaCog } from 'react-icons/fa';

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/home', icon: <FaHome /> },
    { name: 'Post', path: '/post', icon: <FaPlusCircle /> },
    { name: 'Find', path: '/find', icon: <FaSearch /> },
    { name: 'Settings', path: '/settings', icon: <FaCog /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white border-t border-gray-700 z-50 md:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center text-xs ${
              location.pathname === item.path ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;

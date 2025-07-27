import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaPlusCircle,
  FaSearch,
  FaCog,
  FaHeart,
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const MobileBottomNav = () => {
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/home', icon: <FaHome /> },
    { name: 'Post', path: '/post', icon: <FaPlusCircle /> },
    { name: 'Find', path: '/find', icon: <FaSearch /> },
    { name: 'Support', path: '/support', icon: <FaHeart /> },
    { name: 'Settings', path: '/settings', icon: <FaCog /> },
  ];

  // Theme-based styles
  const bgBase = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const inactiveIcon = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const activeText = 'text-yellow-400';

  return (
    <nav
      className={`w-full max-w-screen border-t z-50 md:hidden overflow-hidden transition-colors duration-300 ${bgBase} ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-300'
      }`}
    >
      <div className="flex w-full">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`w-[20%] flex flex-col items-center justify-center py-2 text-xs font-medium transition ${
                isActive ? activeText : inactiveIcon
              }`}
            >
              <div className="text-xl">{item.icon}</div>
              <span className="mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;

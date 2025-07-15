import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaPlusCircle,
  FaSearch,
  FaCog,
  FaHeart
} from 'react-icons/fa';

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/home', icon: <FaHome /> },
    { name: 'Post', path: '/post', icon: <FaPlusCircle /> },
    { name: 'Find', path: '/find', icon: <FaSearch /> },
    { name: 'Support', path: '/support', icon: <FaHeart /> },
    { name: 'Settings', path: '/settings', icon: <FaCog /> },
  ];

  return (
    <nav className=" w-full max-w-screen bg-gray-800 text-white border-t border-gray-700 z-50 md:hidden overflow-hidden">
      <div className="flex w-full">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`w-[20%] flex flex-col items-center justify-center py-2 text-xs ${
              location.pathname === item.path ? 'text-yellow-400' : 'text-gray-300'
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

export default MobileBottomNav;

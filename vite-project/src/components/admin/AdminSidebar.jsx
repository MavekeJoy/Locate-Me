// src/components/admin/AdminSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const links = [
    { to: '/admin/submissions', label: 'Submissions' },
    { to: '/admin/users', label: 'Users' },
    { to: '/admin/settings', label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-gray-800 p-6">
      <h2 className="text-yellow-400 text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-sm font-semibold px-3 py-2 rounded hover:bg-gray-700 ${
                isActive ? 'bg-yellow-400 text-gray-900' : 'text-white'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;

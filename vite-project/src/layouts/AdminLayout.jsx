// src/layouts/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminTopbar from '../components/admin/AdminTopbar';
import AdminBottomNav from '../components/admin/AdminBottomNav';
import { useTheme } from '../context/ThemeContext';

const AdminLayout = () => {
  const { theme } = useTheme();

  const layoutBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';

  return (
    <div className={`flex min-h-screen ${layoutBg} transition-all duration-300`}>
      {/* Sidebar for desktop only */}
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      <div className="flex-1 flex flex-col pt-14 pb-16 px-4 md:px-8">
        {/* Mobile Topbar */}
        <AdminTopbar />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>

        {/* Mobile BottomNav */}
        <AdminBottomNav />
      </div>
    </div>
  );
};

export default AdminLayout;

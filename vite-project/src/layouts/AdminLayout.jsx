// src/layouts/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminBottomNav from '../components/admin/AdminBottomNav';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar - only shown on medium screens and up */}
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar - visible on all devices */}
        <AdminTopbar />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

        {/* Bottom nav - only shown on small screens */}
        <div className="md:hidden">
          <AdminBottomNav />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

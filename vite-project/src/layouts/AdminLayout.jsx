// src/layouts/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminTopbar from '../components/admin/AdminTopbar';
import AdminBottomNav from '../components/admin/AdminBottomNav';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
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

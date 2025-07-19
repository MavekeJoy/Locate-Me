// src/pages/admin/AdminDashboard.jsx
import React from 'react';
import AdminActivityPanel from '../../components/admin/AdminActivityPanel'; 

const AdminDashboard = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-8 md:pl-64">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">Admin Dashboard</h1>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-4 py-2 rounded-lg w-48 md:w-64"
          />
          <div className="w-10 h-10 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center font-bold">
            RW
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-sm text-gray-400">Total Submissions</h3>
              <p className="text-2xl font-bold text-yellow-300 mt-2">351</p>
              <span className="text-xs text-green-400">+12% from last month</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-sm text-gray-400">Missing Posts</h3>
              <p className="text-2xl font-bold text-yellow-300 mt-2">142</p>
              <span className="text-xs text-green-400">+5% from last month</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-sm text-gray-400">Sightings Reported</h3>
              <p className="text-2xl font-bold text-yellow-300 mt-2">209</p>
              <span className="text-xs text-red-400">-3% from last month</span>
            </div>
          </div>

          {/* Graph + Right Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg h-64 flex items-center justify-center col-span-1 md:col-span-2">
              <span className="text-gray-400">[Submissions Over Time Graph]</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-2">Top Post Types</h4>
              <div className="text-yellow-300 font-semibold">🟡 Post Me 60%</div>
              <div className="text-yellow-300 font-semibold">⚫ Find Me 40%</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-2">Sources</h4>
              <div className="text-sm">App: <span className="text-yellow-300">70%</span></div>
              <div className="text-sm">Web: <span className="text-yellow-300">30%</span></div>
            </div>
          </div>
        </div>

        {/* Right Activity Panel */}
        <div className="w-full">
          <AdminActivityPanel />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

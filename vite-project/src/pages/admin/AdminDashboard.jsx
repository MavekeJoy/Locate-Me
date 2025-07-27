// src/pages/admin/AdminDashboard.jsx
import React from 'react';
import AdminActivityPanel from '../../components/admin/AdminActivityPanel';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-4 py-6 sm:px-6 md:px-8 lg:pl-64 transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
          Admin Dashboard
        </h1>

        {/* Search and avatar */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full md:w-64"
          />
          <div className="w-10 h-10 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center font-bold">
            RW
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Cards and Graphs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { label: 'Total Submissions', count: 351, color: 'text-green-400', trend: '+12%' },
              { label: 'Missing Posts', count: 142, color: 'text-green-400', trend: '+5%' },
              { label: 'Sightings Reported', count: 209, color: 'text-red-400', trend: '-3%' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-sm text-gray-400">{item.label}</h3>
                <p className="text-2xl font-bold text-yellow-300 mt-2">{item.count}</p>
                <span className={`text-xs ${item.color}`}>{item.trend} from last month</span>
              </div>
            ))}
          </div>

          {/* Graph and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg min-h-[240px] flex items-center justify-center md:col-span-2">
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

        {/* Activity Panel */}
        <div className="w-full">
          <AdminActivityPanel />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

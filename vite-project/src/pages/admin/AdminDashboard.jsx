// src/pages/admin/AdminDashboard.jsx
import React from 'react';
import AdminActivityPanel from '../../components/admin/AdminActivityPanel';
import { useTheme } from '../../context/ThemeContext'; // ✅

const AdminDashboard = () => {
  const { theme } = useTheme(); // ✅ access theme

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen px-4 py-6 sm:px-6 md:px-8 transition  md:pl-64 duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
          Admin Dashboard
        </h1>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className={`px-4 py-2 rounded-lg w-full md:w-64 ${
              isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
            }`}
          />
          <div className="w-10 h-10 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center font-bold">
            RW
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summary Cards */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { label: 'Total Submissions', count: 351, color: 'text-green-500', trend: '+12%' },
              { label: 'Missing Posts', count: 142, color: 'text-green-500', trend: '+5%' },
              { label: 'Sightings Reported', count: 209, color: 'text-red-500', trend: '-3%' },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-lg shadow ${
                  isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                <h3 className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.label}</h3>
                <p className="text-2xl font-bold text-yellow-400 mt-2">{item.count}</p>
                <span className={`text-xs ${item.color}`}>{item.trend} from last month</span>
              </div>
            ))}
          </div>

          {/* Graph and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-6 rounded-lg min-h-[240px] flex items-center justify-center md:col-span-2 ${
                isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
              }`}
            >
              [Submissions Over Time Graph]
            </div>

            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h4 className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Top Post Types</h4>
              <div className="text-yellow-400 font-semibold">🟡 Post Me 60%</div>
              <div className="text-yellow-400 font-semibold">⚫ Find Me 40%</div>
            </div>

            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h4 className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Sources</h4>
              <div className="text-sm">App: <span className="text-yellow-400">70%</span></div>
              <div className="text-sm">Web: <span className="text-yellow-400">30%</span></div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full">
          <AdminActivityPanel />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

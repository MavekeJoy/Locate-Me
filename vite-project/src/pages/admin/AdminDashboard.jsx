import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Admin Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Cards */}
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-white mb-2">Total Reports</h3>
          <p className="text-4xl font-bold text-yellow-400">28</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-white mb-2">Submissions Today</h3>
          <p className="text-4xl font-bold text-yellow-400">5</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-white mb-2">Pending Reviews</h3>
          <p className="text-4xl font-bold text-yellow-400">3</p>
        </div>
      </div>

      {/* Quick links */}
      <div className="mt-10 space-y-4">
        <h4 className="text-xl font-semibold text-yellow-300 mb-3">Quick Links</h4>
        <Link
          to="/admin/submissions"
          className="block bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded text-white"
        >
          Manage Submissions
        </Link>
        <Link
          to="/admin/users"
          className="block bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded text-white"
        >
          View User List
        </Link>
        <Link
          to="/admin/settings"
          className="block bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded text-white"
        >
          Admin Settings
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

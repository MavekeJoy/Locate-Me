// src/pages/admin/AdminSettings.jsx
import React from 'react';

const AdminSettings = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-8 md:pl-64">
      <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8">Settings</h1>


      {/* Password Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="password"
            placeholder="Current Password"
            className="bg-gray-700 px-4 py-2 rounded-lg text-white"
          />
          <input
            type="password"
            placeholder="New Password"
            className="bg-gray-700 px-4 py-2 rounded-lg text-white"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="bg-gray-700 px-4 py-2 rounded-lg text-white md:col-span-2"
          />
        </div>
        <button className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-300 font-semibold">
          Update Password
        </button>
      </div>

      {/* Preferences */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        <div className="flex items-center justify-between">
          <span>Enable Notifications</span>
          <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;

import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const AdminSettings = () => {
  const { theme, toggleTheme } = useTheme(); // toggleTheme added
  const [settings, setSettings] = useState({
    notifications: true,
    autoApprove: false,
    showActivity: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const containerBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const toggleBg = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300';
  const toggleCircle = theme === 'dark' ? 'bg-yellow-400' : 'bg-gray-900';

  const renderToggle = (active) => (
    <div
      className={`w-14 h-8 rounded-full relative cursor-pointer ${active ? 'bg-green-500' : toggleBg}`}
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full ${toggleCircle} transition-all duration-300 ${
          active ? 'translate-x-6' : ''
        }`}
      />
    </div>
  );

  return (
    <div className={`${containerBg} min-h-screen px-6 py-8 md:pl-64 transition-all duration-300`}>
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Admin Settings</h2>

      <div className={`space-y-6 ${cardBg} p-6 rounded-lg shadow-lg`}>
        {/* Notifications */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Enable Notifications</h3>
            <p className="text-sm text-gray-400">Receive alerts for new activity.</p>
          </div>
          <button onClick={() => handleToggle('notifications')}>
            {renderToggle(settings.notifications)}
          </button>
        </div>

        {/* Auto Approve */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Auto Approve Posts</h3>
            <p className="text-sm text-gray-400">Allow verified users’ posts to be auto-approved.</p>
          </div>
          <button onClick={() => handleToggle('autoApprove')}>
            {renderToggle(settings.autoApprove)}
          </button>
        </div>

        {/* Show Activity */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Show Admin Activity</h3>
            <p className="text-sm text-gray-400">Display online and recent admin actions.</p>
          </div>
          <button onClick={() => handleToggle('showActivity')}>
            {renderToggle(settings.showActivity)}
          </button>
        </div>

        {/* Dark Mode Toggle for Desktop Users */}
        <div className="hidden md:flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Enable Dark Mode</h3>
            <p className="text-sm text-gray-400">Toggle between dark and light themes (visible on desktop).</p>
          </div>
          <button onClick={toggleTheme}>
            {renderToggle(theme === 'dark')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;

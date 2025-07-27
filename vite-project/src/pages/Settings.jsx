import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [language, setLanguage] = useState('English');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/landing');
  };

  const baseBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const baseText = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const sectionText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className={`min-h-screen py-10 px-6 transition duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Settings</h2>

      {/* Language */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Language</h3>
        <div className={`${baseBg} p-4 rounded`}>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={`w-full p-3 rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black border'}`}
          >
            <option value="English">English</option>
            <option value="Kiswahili">Kiswahili</option>
            <option value="French">French</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>

      {/* Notifications */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Notifications</h3>
        <div className={`${baseBg} p-4 rounded flex items-center justify-between`}>
          <span className={sectionText}>Enable Notifications</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            />
            <div className={`w-10 h-6 rounded-full p-1 transition ${notificationsEnabled ? 'bg-yellow-400' : 'bg-gray-600'}`}>
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition-transform ${notificationsEnabled ? 'translate-x-4' : ''}`}
              ></div>
            </div>
          </label>
        </div>
      </div>

      {/* About */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">About</h3>
        <div className={`${baseBg} p-4 rounded ${sectionText}`}>
          Locate Me v1.0.0<br />
          A community-driven missing persons finder.
        </div>
      </div>

      {/* Storage */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Storage</h3>
        <div className={`${baseBg} p-4 rounded ${sectionText}`}>
          Used Storage: <strong>7KB</strong>
        </div>
      </div>

      {/* Legal */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Legal</h3>
        <div className={`${baseBg} p-4 rounded text-yellow-400 space-y-2`}>
          <a href="#" className="block hover:underline">Terms of Service</a>
          <a href="#" className="block hover:underline">Privacy Policy</a>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="w-24 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-400 font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;

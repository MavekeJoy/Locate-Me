import React, { useState } from 'react';
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaUser,
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext'; // ✅ Import theme context

const AdminNotifications = () => {
  const { theme } = useTheme(); // ✅ Theme hook
  const [search, setSearch] = useState('');
  const [notifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'New Sighting Reported',
      description: 'Mary K. submitted a sighting report near Nairobi CBD.',
      timestamp: '2 mins ago',
    },
    {
      id: 2,
      type: 'warning',
      title: 'User Suspended',
      description: 'Ali Yusuf was suspended for submitting false reports.',
      timestamp: '15 mins ago',
    },
    {
      id: 3,
      type: 'alert',
      title: 'Duplicate Reports Detected',
      description: '3 similar sightings have been flagged for review.',
      timestamp: '1 hour ago',
    },
    {
      id: 4,
      type: 'success',
      title: 'User Reactivated',
      description: 'Jane Mwangi was successfully reactivated.',
      timestamp: 'Yesterday',
    },
  ]);

  const filteredNotifications = notifications.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.description.toLowerCase().includes(search.toLowerCase())
  );

  const getTypeIcon = (type) => {
    switch (type) {
      case 'info':
        return <FaInfoCircle className="text-blue-400 text-xl mr-3" />;
      case 'warning':
        return <FaExclamationTriangle className="text-yellow-400 text-xl mr-3" />;
      case 'alert':
        return <FaExclamationTriangle className="text-red-500 text-xl mr-3" />;
      case 'success':
        return <FaCheckCircle className="text-green-400 text-xl mr-3" />;
      default:
        return <FaUser className="text-gray-300 text-xl mr-3" />;
    }
  };

  // Theme styles
  const bg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
  const inputBg = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100';
  const subText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const timestampText = theme === 'dark' ? 'text-gray-500' : 'text-gray-500';

  return (
    <div className={`${bg} min-h-screen px-6 py-8 md:pl-64 transition-all duration-300`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">Notifications</h1>
        <input
          type="text"
          placeholder="Search notifications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`px-4 py-2 rounded-lg w-64 ${inputBg}`}
        />
      </div>

      {/* Notification Cards */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <p className={`${subText} text-sm`}>No notifications found.</p>
        ) : (
          filteredNotifications.map((note) => (
            <div
              key={note.id}
              className={`${cardBg} p-4 rounded-lg flex items-start shadow-md transition`}
            >
              {getTypeIcon(note.type)}
              <div>
                <h4 className="font-semibold text-yellow-400 text-sm">{note.title}</h4>
                <p className={`${subText} text-sm`}>{note.description}</p>
                <span className={`${timestampText} text-xs`}>{note.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminNotifications;

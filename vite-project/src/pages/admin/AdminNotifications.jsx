import React, { useState } from 'react';
import { FaInfoCircle, FaExclamationTriangle, FaCheckCircle, FaUser } from 'react-icons/fa';

const AdminNotifications = () => {
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

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-8 md:pl-64">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">Notifications</h1>
        <input
          type="text"
          placeholder="Search notifications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg w-64"
        />
      </div>

      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <p className="text-gray-400 text-sm">No notifications found.</p>
        ) : (
          filteredNotifications.map((note) => (
            <div
              key={note.id}
              className="bg-gray-800 p-4 rounded-lg flex items-start shadow-md hover:bg-gray-700 transition"
            >
              {getTypeIcon(note.type)}
              <div>
                <h4 className="font-semibold text-yellow-300 text-sm">{note.title}</h4>
                <p className="text-gray-300 text-sm">{note.description}</p>
                <span className="text-gray-500 text-xs">{note.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminNotifications;

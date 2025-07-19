import React, { useState } from 'react';
import { FaCircle, FaMapMarkerAlt } from 'react-icons/fa';

const mockAdmins = [
  {
    name: 'Max Stone',
    activity: 'Reviewing posts',
    time: '5 mins ago',
    status: 'online',
    location: 'Nairobi',
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    name: 'Grisha Jack',
    activity: 'Approving sightings',
    time: '22 mins ago',
    status: 'offline',
    location: 'Mombasa',
    avatar: 'https://i.pravatar.cc/40?img=2',
  },
  {
    name: 'Levi Patrick',
    activity: 'Checking reports',
    time: '1 hour ago',
    status: 'online',
    location: 'Kisumu',
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
];

const AdminActivityPanel = () => {
  const [activeTab, setActiveTab] = useState('activities');

  const filtered = activeTab === 'online'
    ? mockAdmins.filter((admin) => admin.status === 'online')
    : mockAdmins;

  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg w-full md:w-72">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Admins</h2>
        <button className="text-sm text-yellow-400 hover:underline">View All</button>
      </div>

      <div className="flex mb-4">
        <button
          className={`flex-1 py-1 rounded-l-full text-sm ${
            activeTab === 'activities' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700'
          }`}
          onClick={() => setActiveTab('activities')}
        >
          Activities
        </button>
        <button
          className={`flex-1 py-1 rounded-r-full text-sm ${
            activeTab === 'online' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700'
          }`}
          onClick={() => setActiveTab('online')}
        >
          Online
        </button>
      </div>

      <ul className="space-y-4">
        {filtered.map((admin, index) => (
          <li key={index} className="flex items-start space-x-3">
            <img src={admin.avatar} alt={admin.name} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{admin.name}</span>
                <FaCircle
                  className={`text-xs ${
                    admin.status === 'online' ? 'text-green-400' : 'text-gray-500'
                  }`}
                />
              </div>
              <p className="text-sm text-gray-300">{admin.activity}</p>
              <p className="text-xs text-gray-400">{admin.time}</p>
              <p className="flex items-center text-xs text-gray-400 mt-1">
                <FaMapMarkerAlt className="mr-1" /> {admin.location}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminActivityPanel;

import React, { useState } from 'react';
import { FaCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext'; // ✅ Import theme context

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
  const { theme } = useTheme(); // ✅ Use theme

  const filtered = activeTab === 'online'
    ? mockAdmins.filter((admin) => admin.status === 'online')
    : mockAdmins;

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const cardColor = theme === 'dark' ? 'bg-gray-700' : 'bg-white';
  const subText = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`${bgColor} ${textColor} rounded-lg p-4 shadow-lg w-full md:w-72 transition-all duration-300`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Admins</h2>
        <button className="text-sm text-yellow-400 hover:underline">View All</button>
      </div>

      <div className="flex mb-4">
        <button
          className={`flex-1 py-1 rounded-l-full text-sm transition ${
            activeTab === 'activities' ? 'bg-yellow-400 text-gray-900' : `${cardColor}`
          }`}
          onClick={() => setActiveTab('activities')}
        >
          Activities
        </button>
        <button
          className={`flex-1 py-1 rounded-r-full text-sm transition ${
            activeTab === 'online' ? 'bg-yellow-400 text-gray-900' : `${cardColor}`
          }`}
          onClick={() => setActiveTab('online')}
        >
          Online
        </button>
      </div>

      <ul className="space-y-4">
        {filtered.map((admin, index) => (
          <li key={index} className={`flex items-start space-x-3 p-2 rounded ${cardColor}`}>
            <img src={admin.avatar} alt={admin.name} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{admin.name}</span>
                <FaCircle
                  className={`text-xs ${
                    admin.status === 'online' ? 'text-green-400' : 'text-gray-400'
                  }`}
                />
              </div>
              <p className={`text-sm ${subText}`}>{admin.activity}</p>
              <p className={`text-xs ${subText}`}>{admin.time}</p>
              <p className={`flex items-center text-xs mt-1 ${subText}`}>
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

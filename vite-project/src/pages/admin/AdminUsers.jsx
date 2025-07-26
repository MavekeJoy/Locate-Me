import React, { useState } from 'react';
import UserModal from '../../components/admin/UserModal';

const AdminUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Jane Mwangi',
      email: 'jane@example.com',
      posts: 5,
      sightings: 2,
      joined: '2024-10-01',
      status: 'Active',
      suspendReason: '',
    },
    {
      id: 2,
      name: 'Ali Yusuf',
      email: 'ali@gmail.com',
      posts: 0,
      sightings: 3,
      joined: '2025-02-18',
      status: 'Active',
      suspendReason: '',
    },
    {
      id: 3,
      name: 'Mary K.',
      email: 'maryk@example.com',
      posts: 1,
      sightings: 0,
      joined: '2025-05-11',
      status: 'Suspended',
      suspendReason: 'Spamming fake reports',
    },
  ]);

  const [modalType, setModalType] = useState(null); // 'view' | 'suspend' | 'delete'
  const [selectedUser, setSelectedUser] = useState(null);

  const handleView = (user) => {
    setSelectedUser(user);
    setModalType('view');
  };

  const handleToggleStatus = (user) => {
    if (user.status === 'Active') {
      setSelectedUser(user);
      setModalType('suspend');
    } else {
      // Reactivate
      setUsers((prev) =>
        prev.map((u) =>
          u.id === user.id ? { ...u, status: 'Active', suspendReason: '' } : u
        )
      );
    }
  };

  const handleSuspendConfirm = (reason) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === selectedUser.id
          ? { ...u, status: 'Suspended', suspendReason: reason }
          : u
      )
    );
    setSelectedUser(null);
    setModalType(null);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setModalType('delete');
  };

  const handleConfirmDelete = () => {
    setUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
    setSelectedUser(null);
    setModalType(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-8 md:pl-64">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">Platform Users</h1>
        <input
          type="text"
          placeholder="Search users..."
          className="bg-gray-700 text-white px-4 py-2 rounded-lg w-64"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left text-sm bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-yellow-300">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email / Phone</th>
              <th className="px-4 py-3">Posts</th>
              <th className="px-4 py-3">Sightings</th>
              <th className="px-4 py-3">Joined</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-600 hover:bg-gray-700">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.posts}</td>
                <td className="px-4 py-3">{user.sightings}</td>
                <td className="px-4 py-3">{user.joined}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold relative group ${
                      user.status === 'Active' ? 'bg-green-600' : 'bg-red-500'
                    }`}
                  >
                    {user.status}
                    {user.status === 'Suspended' && user.suspendReason && (
                      <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                        Reason: {user.suspendReason}
                      </span>
                    )}
                  </span>
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => handleView(user)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleToggleStatus(user)}
                    className={`${
                      user.status === 'Active'
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-green-500 hover:bg-green-600'
                    } text-white px-3 py-1 rounded text-xs`}
                  >
                    {user.status === 'Active' ? 'Suspend' : 'Activate'}
                  </button>
                  <button
                    onClick={() => handleDelete(user)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reusable Modal for All Actions */}
      <UserModal
        show={!!modalType}
        type={modalType}
        user={selectedUser}
        onClose={() => {
          setModalType(null);
          setSelectedUser(null);
        }}
        onSubmit={
          modalType === 'suspend'
            ? handleSuspendConfirm
            : modalType === 'delete'
            ? handleConfirmDelete
            : () => {}
        }
      />
    </div>
  );
};

export default AdminUsers;

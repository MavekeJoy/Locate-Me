import React from 'react';

const ViewUserModal = ({ show, onClose, user }) => {
  if (!show || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center animate-zoomIn">
      <div className="bg-gray-800 text-white rounded-lg p-6 w-11/12 max-w-md shadow-lg relative">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">User Details</h2>

        <div className="space-y-2 text-sm">
          <p><span className="text-gray-400">Name:</span> {user.name}</p>
          <p><span className="text-gray-400">Email/Phone:</span> {user.email}</p>
          <p><span className="text-gray-400">Posts:</span> {user.posts}</p>
          <p><span className="text-gray-400">Sightings:</span> {user.sightings}</p>
          <p><span className="text-gray-400">Joined:</span> {user.joined}</p>
          <p><span className="text-gray-400">Status:</span> {user.status}</p>
          {user.status === 'Suspended' && (
            <p><span className="text-gray-400">Suspension Reason:</span> {user.suspendReason}</p>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewUserModal;

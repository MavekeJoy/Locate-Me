import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const UserModal = ({ show, type, user, onClose, onSubmit }) => {
  const { theme } = useTheme();
  const [reason, setReason] = useState('');

  useEffect(() => {
    if (type === 'suspend') {
      setReason('');
    }
  }, [type]);

  if (!show || !user) return null;

  const handleAction = () => {
    if (type === 'suspend') {
      if (!reason.trim()) return;
      onSubmit(reason);
    } else {
      onSubmit();
    }
  };

  const modalBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';
  const inputBg = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900';
  const cancelBtn = theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className={`p-6 rounded-lg max-w-md w-full shadow-lg transform scale-100 transition ${modalBg}`}>
        <h2 className="text-xl font-bold text-yellow-400 mb-4">
          {type === 'view' && 'User Details'}
          {type === 'suspend' && 'Suspend User'}
          {type === 'delete' && 'Confirm Deletion'}
        </h2>

        <div className="text-sm space-y-3">
          {type === 'view' && (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Posts:</strong> {user.posts}</p>
              <p><strong>Sightings:</strong> {user.sightings}</p>
              <p><strong>Status:</strong> {user.status}</p>
              {user.status === 'Suspended' && (
                <p className="text-red-500"><strong>Reason:</strong> {user.suspendReason}</p>
              )}
            </>
          )}

          {type === 'suspend' && (
            <div>
              <label className="block mb-2">Reason for Suspension:</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows="3"
                className={`w-full p-3 rounded ${inputBg} focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                placeholder="Enter reason..."
              />
            </div>
          )}

          {type === 'delete' && (
            <p className="text-red-500">
              Are you sure you want to delete <strong>{user.name}</strong>? This action is permanent.
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded ${cancelBtn}`}
          >
            Cancel
          </button>
          <button
            onClick={handleAction}
            className={`px-4 py-2 rounded text-white font-semibold ${
              type === 'delete'
                ? 'bg-red-500 hover:bg-red-400'
                : type === 'suspend'
                ? 'bg-yellow-500 hover:bg-yellow-400 text-black'
                : 'hidden'
            }`}
            disabled={type === 'suspend' && !reason.trim()}
          >
            {type === 'suspend' ? 'Confirm' : type === 'delete' ? 'Delete' : ''}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

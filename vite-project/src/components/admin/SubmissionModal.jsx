import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const SubmissionModal = ({
  show,
  type, // 'view' | 'resolve' | 'delete'
  submission,
  onClose,
  onConfirm,
}) => {
  const { theme } = useTheme();

  if (!show || !submission) return null;

  const modalBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';
  const contentText = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const cancelBtn = theme === 'dark'
    ? 'bg-gray-600 hover:bg-gray-500 text-white'
    : 'bg-gray-200 hover:bg-gray-300 text-gray-900';

  const resolveBtn = 'bg-green-500 hover:bg-green-400 text-white';
  const deleteBtn = 'bg-red-500 hover:bg-red-400 text-white';
  const closeBtn = 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold';

  const renderContent = () => {
    if (type === 'view') {
      return (
        <div>
          <p><strong>Name:</strong> {submission.name}</p>
          <p><strong>Type:</strong> {submission.type}</p>
          <p><strong>Date:</strong> {submission.date}</p>
          <p><strong>Location:</strong> {submission.location}</p>
          <p><strong>Status:</strong> {submission.status}</p>
          <img
            src={submission.image}
            alt="submission"
            className="mt-4 w-40 h-40 object-cover rounded"
          />
        </div>
      );
    } else if (type === 'resolve') {
      return (
        <p>
          Are you sure you want to mark <strong>{submission.name}</strong> as{' '}
          <span className="text-green-500 font-semibold">resolved</span>?
        </p>
      );
    } else if (type === 'delete') {
      return (
        <p className="text-red-500">
          Are you sure you want to <strong>delete</strong> the submission for{' '}
          <strong>{submission.name}</strong>? This action cannot be undone.
        </p>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className={`${modalBg} p-6 rounded-lg w-[90%] max-w-md shadow-xl`}>
        <h2 className="text-xl font-bold mb-4 text-yellow-400 capitalize">{type} Submission</h2>
        <div className={`text-sm mb-6 space-y-2 ${contentText}`}>
          {renderContent()}
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded text-sm ${cancelBtn}`}
          >
            Cancel
          </button>
          {type !== 'view' && (
            <button
              onClick={onConfirm}
              className={`px-4 py-2 rounded text-sm ${
                type === 'delete' ? deleteBtn : resolveBtn
              }`}
            >
              {type === 'delete' ? 'Delete' : 'Mark Resolved'}
            </button>
          )}
          {type === 'view' && (
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded text-sm ${closeBtn}`}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;

import React from 'react';

const SuspendModal = ({ show, onClose, onSubmit, userName }) => {
  const [reason, setReason] = React.useState('');

  const handleConfirm = () => {
    if (!reason.trim()) {
      alert('Please enter a reason to continue.');
      return;
    }
    onSubmit(reason);
    setReason('');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg p-6 w-[90%] max-w-md animate-zoomIn">
        <h2 className="text-lg font-semibold text-yellow-300 mb-4">Suspend {userName}</h2>
        <textarea
          className="w-full p-3 bg-gray-700 text-white rounded resize-none"
          rows="4"
          placeholder="Enter reason for suspension..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <div className="mt-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white font-bold"
          >
            Confirm Suspend
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuspendModal;

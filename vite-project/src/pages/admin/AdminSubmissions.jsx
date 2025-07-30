import React, { useState } from 'react';
import SubmissionModal from '../../components/admin/SubmissionModal';
import { useTheme } from '../../context/ThemeContext'; // ✅ Theme context

const mockSubmissions = [
  {
    id: 1,
    name: 'John Doe',
    type: 'Post Me',
    date: '2025-07-10',
    location: 'Nairobi CBD',
    status: 'Pending',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: 2,
    name: 'Unknown',
    type: 'Find Me',
    date: '2025-07-11',
    location: 'Westlands',
    status: 'Verified',
    image: 'https://via.placeholder.com/80',
  },
];

const AdminSubmissions = () => {
  const { theme } = useTheme(); // ✅ use theme
  const [search, setSearch] = useState('');
  const [submissions, setSubmissions] = useState(mockSubmissions);
  const [modalType, setModalType] = useState(null);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const openModal = (type, submission) => {
    setModalType(type);
    setSelectedSubmission(submission);
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedSubmission(null);
  };

  const handleConfirm = () => {
    if (modalType === 'resolve') {
      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === selectedSubmission.id
            ? { ...sub, status: 'Resolved' }
            : sub
        )
      );
    } else if (modalType === 'delete') {
      setSubmissions((prev) =>
        prev.filter((sub) => sub.id !== selectedSubmission.id)
      );
    }
    closeModal();
  };

  const filtered = submissions.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // Theme styles
  const bg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
  const card = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const input = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900';
  const border = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const subText = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`${bg} min-h-screen px-6 py-8 md:pl-64 transition-all duration-300`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-yellow-400">Submissions</h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`px-4 py-2 rounded w-full sm:w-64 ${input}`}
        />
      </div>

      {/* Table (Desktop) */}
      <div className="hidden md:block overflow-x-auto">
        <table className={`min-w-full ${card} rounded shadow-lg overflow-hidden`}>
       <thead>
  <tr
    className={`text-left text-sm ${
      theme === 'dark'
        ? 'bg-gray-700 text-yellow-300'
        : 'bg-gray-200 text-gray-900'
    }`}
  >
    <th className="p-3">Image</th>
    <th className="p-3">Name</th>
    <th className="p-3">Type</th>
    <th className="p-3">Date</th>
    <th className="p-3">Location</th>
    <th className="p-3">Status</th>
    <th className="p-3">Actions</th>
  </tr>
</thead>

          <tbody>
            {filtered.map((submission) => (
              <tr key={submission.id} className={`border-t ${border} text-sm`}>
                <td className="p-3">
                  <img src={submission.image} alt="" className="w-12 h-12 rounded" />
                </td>
                <td className="p-3">{submission.name}</td>
                <td className="p-3">{submission.type}</td>
                <td className="p-3">{submission.date}</td>
                <td className="p-3">{submission.location}</td>
                <td className="p-3 text-yellow-400">{submission.status}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => openModal('view', submission)}
                    className="text-xs px-3 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300"
                  >
                    View
                  </button>
                  <button
                    onClick={() => openModal('resolve', submission)}
                    className="text-xs px-3 py-1 bg-green-500 text-white rounded hover:bg-green-400"
                  >
                    Mark Resolved
                  </button>
                  <button
                    onClick={() => openModal('delete', submission)}
                    className="text-xs px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards (Mobile) */}
      <div className="md:hidden space-y-4">
        {filtered.map((submission) => (
          <div key={submission.id} className={`${card} p-4 rounded shadow-lg`}>
            <div className="flex items-center gap-4 mb-2">
              <img src={submission.image} alt="" className="w-14 h-14 rounded" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-400">{submission.name}</h3>
                <p className={`text-xs ${subText}`}>{submission.type} • {submission.date}</p>
              </div>
            </div>
            <p className="text-sm"><span className={`${subText}`}>Location:</span> {submission.location}</p>
            <p className="text-sm text-yellow-400 mt-1">Status: {submission.status}</p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => openModal('view', submission)}
                className="flex-1 px-3 py-1 bg-yellow-400 text-gray-900 rounded text-xs"
              >
                View
              </button>
              <button
                onClick={() => openModal('resolve', submission)}
                className="flex-1 px-3 py-1 bg-green-500 text-white rounded text-xs"
              >
                Mark Resolved
              </button>
              <button
                onClick={() => openModal('delete', submission)}
                className="flex-1 px-3 py-1 bg-red-500 text-white rounded text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <SubmissionModal
        show={!!modalType}
        type={modalType}
        submission={selectedSubmission}
        onClose={closeModal}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default AdminSubmissions;

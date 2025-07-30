import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const EditPersonalInfoModal = ({ show, onClose, onSave, profile }) => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    phone: profile.phone,
    bio: profile.bio,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  if (!show) return null;

  const modalBg = theme === 'dark' ? 'bg-gray-800 text-yellow-300' : 'bg-white text-gray-800';
  const inputBg = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900';
  const cancelBtn = theme === 'dark' ? 'bg-gray-600 hover:bg-gray-700 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-900';
  const saveBtn = 'bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold';

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className={`${modalBg} p-6 rounded-lg w-full max-w-md shadow-lg animate-scale-in`}>
        <h2 className="text-xl font-bold mb-4">Edit Personal Information</h2>
        <div className="space-y-3">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className={`w-full p-2 rounded focus:outline-none focus:ring ${inputBg}`}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className={`w-full p-2 rounded focus:outline-none focus:ring ${inputBg}`}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full p-2 rounded focus:outline-none focus:ring ${inputBg}`}
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className={`w-full p-2 rounded focus:outline-none focus:ring ${inputBg}`}
          />
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Bio"
            className={`w-full p-2 rounded focus:outline-none focus:ring ${inputBg}`}
          />
        </div>
        <div className="flex justify-end mt-4 space-x-3">
          <button onClick={onClose} className={`px-4 py-2 rounded ${cancelBtn}`}>
            Cancel
          </button>
          <button onClick={handleSubmit} className={`px-4 py-2 rounded ${saveBtn}`}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInfoModal;

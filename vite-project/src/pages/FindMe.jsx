import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const FindMe = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    personName: '',
    unknownName: false,
    gender: '',
    locationSeen: '',
    timeSeen: '',
    photoFile: null,
    photoPreview: '',
    description: '',
    yourName: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === 'unknownName') {
      setFormData((prev) => ({
        ...prev,
        unknownName: checked,
        personName: checked ? 'Unknown' : '',
      }));
    } else if (name === 'photoFile') {
      const file = files[0];
      if (file) {
        setFormData((prev) => ({
          ...prev,
          photoFile: file,
          photoPreview: URL.createObjectURL(file),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.photoFile) {
      alert('Please upload a photo before submitting.');
      return;
    }

    alert('Thank you for reporting!');
    navigate('/');
  };

  return (
    <div
      className={`min-h-screen py-10 px-6 md:px-16 pb-2 transition duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Report a Sighting</h2>

      <form
        onSubmit={handleSubmit}
        className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg space-y-6 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
        }`}
      >
        {/* Name or Unknown */}
        <div>
          <label className="block mb-1 font-semibold">Who did you see?</label>
          <input
            type="text"
            name="personName"
            value={formData.personName}
            onChange={handleChange}
            disabled={formData.unknownName}
            required={!formData.unknownName}
            className="w-full p-3 bg-gray-700 text-white rounded"
            placeholder="Enter the name"
          />
          <label className="mt-2 block text-sm">
            <input
              type="checkbox"
              name="unknownName"
              checked={formData.unknownName}
              onChange={handleChange}
              className="mr-2"
            />
            The person didn’t say their name
          </label>
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-semibold">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Location Seen */}
        <div>
          <label className="block mb-1 font-semibold">Where did you see them?</label>
          <input
            type="text"
            name="locationSeen"
            value={formData.locationSeen}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded"
            placeholder="e.g. near Archives, Nairobi"
          />
        </div>

        {/* Time Seen */}
        <div>
          <label className="block mb-1 font-semibold">When did you see them?</label>
          <input
            type="text"
            name="timeSeen"
            value={formData.timeSeen}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded"
            placeholder="e.g. Today at 2PM"
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block mb-1 font-semibold">
            Upload Photo <span className="text-red-400">*</span>
          </label>
          <input
            type="file"
            name="photoFile"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
          {formData.photoPreview && (
            <img
              src={formData.photoPreview}
              alt="Preview"
              className="mt-4 h-32 rounded shadow border"
            />
          )}
        </div>
             <div>
          <label className="block mb-1 font-semibold">
            Upload Photo <span className="text-red-400">*</span>
          </label>
          <input
            type="file"
            name="photoFile"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
          {formData.photoPreview && (
            <img
              src={formData.photoPreview}
              alt="Preview"
              className="mt-4 h-32 rounded shadow border"
            />
          )}
        </div>


        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Describe the sighting</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
            className="w-full p-3 bg-gray-700 text-white rounded"
            placeholder="Details, condition, clothing, etc."
          />
        </div>

        {/* Reporter Info */}
        <div>
          <label className="block mb-1 font-semibold">Your Name</label>
          <input
            type="text"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Contact Info</label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded"
            placeholder="Phone or Email"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-300 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindMe;

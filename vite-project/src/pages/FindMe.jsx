import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindMe = () => {
  const navigate = useNavigate();

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

    console.log('Sighting Submitted:', formData);
    alert('Thank you for reporting! 🙏');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-5 pb-2 px-6 md:px-16 py-10">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Report a Sighting</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
      >
        {/* Name or Unknown */}
        <div>
          <label className="block mb-1 text-yellow-300">Who did you see?</label>
          <input
            type="text"
            name="personName"
            value={formData.personName}
            onChange={handleChange}
            disabled={formData.unknownName}
            required={!formData.unknownName}
            className={`w-full px-4 py-2 bg-gray-700 rounded outline-none text-white ${
              formData.unknownName ? 'opacity-50 cursor-not-allowed' : ''
            }`}
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
          <label className="block mb-1 text-yellow-300">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none text-white"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 text-yellow-300">Where did you see them?</label>
          <input
            type="text"
            name="locationSeen"
            value={formData.locationSeen}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none text-white"
            placeholder="e.g. near Archives, Nairobi"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block mb-1 text-yellow-300">When did you see them?</label>
          <input
            type="text"
            name="timeSeen"
            value={formData.timeSeen}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none text-white"
            placeholder="e.g. Today at 2PM"
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block mb-1 text-yellow-300">
            Upload Photo <span className="text-red-400">*</span>
          </label>
          <input
            type="file"
            name="photoFile"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full bg-gray-700 text-white px-4 py-2 rounded cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-yellow-400 file:text-black hover:file:bg-yellow-300"
          />
          {formData.photoPreview && (
            <img
              src={formData.photoPreview}
              alt="Preview"
              className="mt-4 w-64 h-64 object-cover rounded shadow-md"
            />
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-yellow-300">Describe the sighting</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none text-white"
            placeholder="Details, condition, clothing, etc."
          />
        </div>

        {/* Your Info */}
        <div>
          <label className="block mb-1 text-yellow-300">Your Name</label>
          <input
            type="text"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none text-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">Contact Info</label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none text-white"
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

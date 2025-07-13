import React, { useState } from 'react';

const PostMe = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    photos: [null, null, null, null, null],
    reason: '',
    location: '',
    residence: '',
    workplace: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e, index) => {
    const file = e.target.files[0];
    const updatedPhotos = [...formData.photos];
    updatedPhotos[index] = file;
    setFormData({ ...formData, photos: updatedPhotos });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    alert('Missing person posted successfully!');
    // Upload logic to backend or Firebase goes here
  };

  const handleCancel = () => {
    setFormData({
      fullName: '',
      age: '',
      gender: '',
      photos: [null, null, null, null, null],
      reason: '',
      location: '',
      residence: '',
      workplace: '',
      contact: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Post Missing Person</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block mb-1 font-semibold">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-semibold">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded"
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* File Uploads */}
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index}>
            <label className="block mb-1 font-semibold">Upload Photo {index + 1}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handlePhotoChange(e, index)}
              className="w-full p-3 bg-gray-700 text-white rounded"
              required={index === 0}
            />
            {formData.photos[index] && (
              <p className="text-sm text-gray-400 mt-1">{formData.photos[index].name}</p>
            )}
          </div>
        ))}

        {/* Reason for Disappearance */}
        <div>
          <label className="block mb-1 font-semibold">Reason for Disappearance</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 bg-gray-700 text-white rounded"
            required
          />
        </div>

        {/* Last Known Location */}
        <div>
          <label className="block mb-1 font-semibold">Last Known Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded"
            required
          />
        </div>

        {/* Residence */}
        <div>
          <label className="block mb-1 font-semibold">Residence</label>
          <input
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Workplace/School */}
        <div>
          <label className="block mb-1 font-semibold">Workplace / School</label>
          <input
            type="text"
            name="workplace"
            value={formData.workplace}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Contact Info */}
        <div>
          <label className="block mb-1 font-semibold">How to Contact If Found</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={handleCancel}
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

export default PostMe;

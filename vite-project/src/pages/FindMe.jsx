import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindMe = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    personName: '',
    locationSeen: '',
    timeSeen: '',
    photoUrl: '',
    description: '',
    yourName: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sighting Submitted:', formData);
    // Here, you'd usually send to backend (e.g. Firebase)
    alert('Thank you for reporting! 🙏');
    navigate('/');
  };

  return (
    <div className= "min-h-screen bg-gray-900 text-white pt-5 pb-2 px-6 md:px-16 py-10">
      
      <h2 className= "text-3xl font-bold text-yellow-400 mb-8 text-center"> Report a Sighting</h2>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        <div>
          <label className="block mb-1 text-yellow-300">Who did you see?</label>
          <input
            type="text"
            name="personName"
            value={formData.personName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none text-white"
            placeholder="Enter the name"
          />
        </div>

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

        <div>
          <label className="block mb-1 text-yellow-300">Photo URL (optional)</label>
          <input
            type="text"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none text-white"
            placeholder="Paste image link if any"
          />
        </div>

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
<div className= "flex justify-end gap-4 mt-6">
  <button
    type="button"
    onClick={() => navigate(-1)}
    className= "px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-500 transition"
  >
    Cancel
  </button>
  <button
    type="submit"
    className= "px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-300 transition"
  >
    Submit 
  </button>
</div>

      </form>
    </div>
  );
};

export default FindMe;

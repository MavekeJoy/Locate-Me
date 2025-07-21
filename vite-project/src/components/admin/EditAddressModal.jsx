import React, { useState } from 'react';

const EditAddressModal = ({ show, onClose, onSave, profile }) => {
  const [formData, setFormData] = useState({
    country: profile.country,
    city: profile.city,
    postalCode: profile.postalCode,
    taxId: profile.taxId,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-800 text-yellow-300 p-6 rounded-lg w-full max-w-md shadow-lg animate-scale-in">
        <h2 className="text-xl font-bold mb-4">Edit Address Information</h2>
        <div className="space-y-3">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City / State"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            name="taxId"
            value={formData.taxId}
            onChange={handleChange}
            placeholder="TAX ID"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="flex justify-end mt-4 space-x-3">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 rounded bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAddressModal;

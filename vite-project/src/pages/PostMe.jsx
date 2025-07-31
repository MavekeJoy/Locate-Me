// src/pages/PostMe.jsx
import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

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
    useHotline: false,
  });

  const [photoPreviews, setPhotoPreviews] = useState([null, null, null, null, null]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'useHotline') {
      setFormData((prev) => ({
        ...prev,
        useHotline: checked,
        contact: checked ? '0700000000' : '',
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePhotoChange = (e, index) => {
    const file = e.target.files[0];
    const updatedPhotos = [...formData.photos];
    const updatedPreviews = [...photoPreviews];

    updatedPhotos[index] = file;
    updatedPreviews[index] = file ? URL.createObjectURL(file) : null;

    setFormData({ ...formData, photos: updatedPhotos });
    setPhotoPreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const mandatoryPhotosFilled = formData.photos.slice(0, 3).every((file) => file !== null);
    if (!mandatoryPhotosFilled) {
      alert('Please upload at least the first 3 photos.');
      setLoading(false);
      return;
    }

    try {
      // Upload images to Firebase Storage
      const uploadedImageUrls = await Promise.all(
        formData.photos.map(async (file, index) => {
          if (!file) return null;
          const imageRef = ref(storage, `missing_photos/${uuidv4()}_${file.name}`);
          const snapshot = await uploadBytes(imageRef, file);
          return await getDownloadURL(snapshot.ref);
        })
      );

      const newDoc = {
        fullName: formData.fullName,
        age: formData.age,
        gender: formData.gender,
        reason: formData.reason,
        location: formData.location,
        residence: formData.residence,
        workplace: formData.workplace,
        contact: formData.contact,
        useHotline: formData.useHotline,
        photos: uploadedImageUrls.filter((url) => url !== null),
        createdAt: new Date(),
      };

      await addDoc(collection(db, 'posts'), newDoc);

      alert('Missing person posted successfully!');
      handleCancel();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to post. Please try again.');
    }

    setLoading(false);
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
      useHotline: false,
    });
    setPhotoPreviews([null, null, null, null, null]);
  };

  return (
    <div className="min-h-screen bg-theme text-theme py-10 px-6 md:px-16 pb-2">
      <h2 className="text-4xl font-bold text-yellow-400 mb-2 text-center">Post Missing Person</h2>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto card-theme p-8 rounded-lg shadow-lg space-y-6">
        {/* Full Name */}
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Name" className="w-full p-3 rounded bg-gray-700 text-white" />

        {/* Age */}
        <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder="Age" className="w-full p-3 rounded bg-gray-700 text-white" />

        {/* Gender */}
        <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full p-3 rounded bg-gray-700 text-white">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {/* Photos */}
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index}>
            <input type="file" accept="image/*" onChange={(e) => handlePhotoChange(e, index)} className="w-full p-3 rounded bg-gray-700 text-white" />
            {photoPreviews[index] && <img src={photoPreviews[index]} alt={`Preview ${index + 1}`} className="mt-2 h-32 rounded" />}
          </div>
        ))}

        {/* More Fields */}
        <textarea name="reason" value={formData.reason} onChange={handleChange} required placeholder="Reason for Disappearance" className="w-full p-3 rounded bg-gray-700 text-white" />
        <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="Last Known Location" className="w-full p-3 rounded bg-gray-700 text-white" />
        <input type="text" name="residence" value={formData.residence} onChange={handleChange} placeholder="Residence" className="w-full p-3 rounded bg-gray-700 text-white" />
        <input type="text" name="workplace" value={formData.workplace} onChange={handleChange} placeholder="Workplace / School" className="w-full p-3 rounded bg-gray-700 text-white" />
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} disabled={formData.useHotline} required placeholder="Phone or Email" className="w-full p-3 rounded bg-gray-700 text-white" />
        <label className="block mt-2 text-sm">
          <input type="checkbox" name="useHotline" checked={formData.useHotline} onChange={handleChange} className="mr-2" />
          Use hotline instead (0700000000)
        </label>

        {/* Submit Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button type="button" onClick={handleCancel} className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-500 transition">Cancel</button>
          <button type="submit" disabled={loading} className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-300 transition">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostMe;

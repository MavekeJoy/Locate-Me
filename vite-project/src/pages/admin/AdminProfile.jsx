import React, { useState } from 'react';
import EditPersonalInfoModal from '../../components/admin/EditPersonalInfoModal';
import EditAddressModal from '../../components/admin/EditAddressModal';
import { useTheme } from '../../context/ThemeContext';

const AdminProfile = () => {
  const { theme } = useTheme();

  const [profileImage, setProfileImage] = useState(null);
  const [profile, setProfile] = useState({
    firstName: 'Rafiqur',
    lastName: 'Rahman',
    email: 'rafiqurrahman51@gmail.com',
    phone: '+09 345 346 46',
    bio: 'Team Manager',
    location: 'Leeds, United Kingdom',
    country: 'United Kingdom',
    city: 'Leeds, East London',
    postalCode: 'ERT 2354',
    taxId: 'AS45645756',
  });

  const [showEditPersonal, setShowEditPersonal] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleUpdatePersonal = (updatedInfo) => {
    setProfile((prev) => ({ ...prev, ...updatedInfo }));
    setShowEditPersonal(false);
  };

  const handleUpdateAddress = (updatedAddress) => {
    setProfile((prev) => ({ ...prev, ...updatedAddress }));
    setShowEditAddress(false);
  };

  const handlePasswordSave = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Password update logic can go here
    alert('Password updated successfully!');
    setNewPassword('');
    setConfirmPassword('');
  };

  // Themed styles
  const bgMain = theme === 'dark' ? 'bg-gray-900 text-yellow-300' : 'bg-gray-100 text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const inputBg = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900';
  const labelText = theme === 'dark' ? 'text-yellow-200' : 'text-gray-700';

  return (
    <div className={`${bgMain} min-h-screen px-6 py-10 md:pl-64`}>
      <h1 className="text-2xl font-bold text-yellow-400 mb-6">My Profile</h1>

      {/* Profile Header */}
      <div className={`${cardBg} shadow rounded-lg p-6 mb-6 flex justify-between items-center`}>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-700 overflow-hidden">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-yellow-500 text-sm">
                No image
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-yellow-300">
              {profile.firstName} {profile.lastName}
            </h2>
            <p className="text-sm text-yellow-500">{profile.bio}</p>
            <p className="text-sm text-yellow-500">{profile.location}</p>
          </div>
        </div>
        <div>
          <label className="text-sm text-blue-400 cursor-pointer hover:underline">
            Upload Photo
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        </div>
      </div>

      {/* Personal Info */}
      <div className={`${cardBg} shadow rounded-lg p-6 mb-6`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold text-yellow-300">Personal Information</h3>
          <button onClick={() => setShowEditPersonal(true)} className="text-sm text-blue-400 hover:underline">Edit</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><strong>First Name:</strong> <p>{profile.firstName}</p></div>
          <div><strong>Last Name:</strong> <p>{profile.lastName}</p></div>
          <div><strong>Email address:</strong> <p>{profile.email}</p></div>
          <div><strong>Phone:</strong> <p>{profile.phone}</p></div>
          <div className="md:col-span-2"><strong>Bio:</strong> <p>{profile.bio}</p></div>
        </div>
      </div>

      {/* Address Info */}
      <div className={`${cardBg} shadow rounded-lg p-6`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold text-yellow-300">Address</h3>
          <button onClick={() => setShowEditAddress(true)} className="text-sm text-blue-400 hover:underline">Edit</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><strong>Country:</strong> <p>{profile.country}</p></div>
          <div><strong>City / State:</strong> <p>{profile.city}</p></div>
          <div><strong>Postal Code:</strong> <p>{profile.postalCode}</p></div>
          <div><strong>Tax ID:</strong> <p>{profile.taxId}</p></div>
        </div>
      </div>

      {/* Change Password */}
      <div className={`${cardBg} shadow rounded-lg p-6 mt-6`}>
        <h3 className="text-md font-semibold text-yellow-300 mb-4">Change Password</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <label className={`block mb-1 ${labelText}`}>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={`w-full px-3 py-2 rounded focus:outline-none focus:ring focus:ring-yellow-400 ${inputBg}`}
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className={`block mb-1 ${labelText}`}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-3 py-2 rounded focus:outline-none focus:ring focus:ring-yellow-400 ${inputBg}`}
              placeholder="Confirm new password"
            />
          </div>
        </div>
        <button
          onClick={handlePasswordSave}
          className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-2 rounded"
        >
          Save Password
        </button>
      </div>

      {/* Modals */}
      <EditPersonalInfoModal
        show={showEditPersonal}
        onClose={() => setShowEditPersonal(false)}
        onSave={handleUpdatePersonal}
        profile={profile}
      />
      <EditAddressModal
        show={showEditAddress}
        onClose={() => setShowEditAddress(false)}
        onSave={handleUpdateAddress}
        profile={profile}
      />
    </div>
  );
};

export default AdminProfile;

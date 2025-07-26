// src/pages/SignInPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [existingUser, setExistingUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setExistingUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (existingUser) {
      // Handle login
      if (
        formData.username === existingUser.username &&
        formData.password === existingUser.password
      ) {
        alert('Login successful!');
        navigate(existingUser.role === 'admin' ? '/admin' : '/home');
      } else {
        alert('Invalid credentials.');
      }
    } else {
      // Handle signup
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      localStorage.setItem('user', JSON.stringify(formData));
      alert('Sign up successful!');
      navigate(formData.role === 'admin' ? '/admin' : '/home');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 w-full max-w-md p-8 rounded-lg shadow-xl space-y-6"
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-yellow-400">
            {existingUser ? 'Welcome back!' : 'Your journey starts here'}
          </h2>
          <p className="text-sm text-gray-300">
            {existingUser ? 'Please log in' : 'Take the first step'}
          </p>
        </div>

        {/* Login Form */}
        {existingUser ? (
          <>
            <div>
              <label className="block text-sm mb-1 text-yellow-400">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-yellow-400">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded"
                required
              />
            </div>
          </>
        ) : (
          <>
            {/* Sign Up Form */}
            <div>
              <label className="block text-sm mb-1 text-yellow-400">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-yellow-400">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-yellow-400">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-yellow-400">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-yellow-400">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded hover:bg-yellow-300 transition"
        >
          {existingUser ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignInPage;

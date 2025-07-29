// src/pages/SignInPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const SignInPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
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
      if (
        formData.username === existingUser.username &&
        formData.password === existingUser.password
      ) {
        alert('Login successful!');
        localStorage.setItem('isAuthenticated', 'true');
        navigate(existingUser.role === 'admin' ? '/admin' : '/home');
      } else {
        alert('Invalid credentials.');
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      localStorage.setItem('user', JSON.stringify(formData));
      localStorage.setItem('isAuthenticated', 'true');
      alert('Sign up successful!');
      navigate(formData.role === 'admin' ? '/admin' : '/home');
    }
  };

  const bgBase = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const formBase = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const inputBase = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-500 ${bgBase}`}>
      <form
        onSubmit={handleSubmit}
        className={`${formBase} w-full max-w-md p-8 rounded-lg shadow-xl space-y-6 animate-zoomIn`}
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-yellow-400">
            {existingUser ? 'Welcome back!' : 'Your journey starts here'}
          </h2>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {existingUser ? 'Please log in' : 'Take the first step'}
          </p>
        </div>

        {existingUser ? (
          <>
            <div>
              <label className="block text-sm mb-1 text-yellow-400">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full p-3 rounded ${inputBase}`}
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
                className={`w-full p-3 rounded ${inputBase}`}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm mb-1 text-yellow-400">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded ${inputBase}`}
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
                className={`w-full p-3 rounded ${inputBase}`}
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
                className={`w-full p-3 rounded ${inputBase}`}
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
                className={`w-full p-3 rounded ${inputBase}`}
                required
              />
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

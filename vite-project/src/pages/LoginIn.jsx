// src/pages/LoginIn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      storedUser.email === credentials.email &&
      storedUser.password === credentials.password
    ) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/landing');
    } else {
      alert('Invalid credentials. Please try again or create an account.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-bold text-yellow-400 text-center">Welcome Back</h2>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 rounded"
            placeholder="you@example.com"
          />
        </div>

        {/* Password with show/hide icon */}
        <div>
          <label className="block mb-1 font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full p-3 pr-10 bg-gray-700 rounded"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-300"
        >
          Login
        </button>

        {/* Additional Links */}
        <div className="flex justify-between text-sm text-yellow-300">
          <button
            type="button"
            onClick={() => alert('Forgot password flow coming soon!')}
            className="hover:underline"
          >
            Forgot Password?
          </button>
          <button
            type="button"
            onClick={() => navigate('/signin')}
            className="hover:underline"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

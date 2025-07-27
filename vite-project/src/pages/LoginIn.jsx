// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Login = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

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

  const bgBase = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const formBase = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const inputBase = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 transition-colors duration-500 ${bgBase}`}>

      <form
        onSubmit={handleLogin}
        className={`${formBase} p-6 rounded-lg shadow-lg w-full max-w-sm space-y-5`}
      >
        <h2 className="text-2xl font-bold text-yellow-400 text-center">Welcome Back</h2>

        {/* Email Field */}
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded ${inputBase}`}
            placeholder="you@example.com"
          />
        </div>

        {/* Password Field with toggle */}
        <div>
          <label className="block mb-1 font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className={`w-full p-3 pr-10 rounded ${inputBase}`}
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
          className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-300 transition"
        >
          Login
        </button>

        {/* Links */}
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

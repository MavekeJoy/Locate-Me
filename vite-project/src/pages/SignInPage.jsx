// src/pages/SignInPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { auth } from '../firebase'; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const SignInPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/home');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        navigate('/home');
      } else {
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match!');
          setLoading(false);
          return;
        }
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        navigate('/home');
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const bgBase = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const formBase = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const inputBase = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900';

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-500 ${bgBase}`}
    >
      <form
        onSubmit={handleSubmit}
        className={`${formBase} w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-6 animate-fadeIn`}
      >
        <div className="text-center mb-4">
          <h2 className="text-3xl font-extrabold text-yellow-400">
            {isLogin ? 'Welcome Back!' : 'Create Your Account'}
          </h2>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {isLogin ? 'Login to continue' : 'Sign up to get started'}
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1 text-yellow-400">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-yellow-400 ${inputBase}`}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm mb-1 text-yellow-400">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-yellow-400 ${inputBase}`}
            required
          />
        </div>

        {/* Confirm Password only on Sign Up */}
        {!isLogin && (
          <div>
            <label className="block text-sm mb-1 text-yellow-400">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-yellow-400 ${inputBase}`}
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
        >
          {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
        </button>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white font-semibold py-3 rounded-xl hover:bg-red-400 transition mt-3"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Toggle Between Login / SignUp */}
        <p className="text-center text-sm mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{' '}
              <span
                onClick={() => setIsLogin(false)}
                className="text-yellow-400 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setIsLogin(true)}
                className="text-yellow-400 cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default SignInPage;

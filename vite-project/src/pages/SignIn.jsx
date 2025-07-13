import React from 'react';
import Navbar from '../components/Navbar';

const SignIn = () => (
  <>
    <Navbar />
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-blue-700">Sign In</h2>
      <p className="text-gray-600 mt-2">Login to access more features.</p>
    </div>
  </>
);

export default SignIn;

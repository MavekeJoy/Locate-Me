// src/pages/Support.jsx
import React from 'react';
import { FaMobileAlt, FaPaypal, FaHandsHelping } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-5  px-4 sm:px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Support Locate Me</h2>

      {/* Why Support */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10 text-center">
        <FaHandsHelping className="text-4xl text-yellow-400 mx-auto mb-4" />
        <p className="text-gray-300 text-lg">
          Your support helps us improve Locate Me, reach more people, and reunite more families.
          Every contribution goes directly to platform maintenance and community outreach.
        </p>
      </div>

      {/* M-Pesa Support */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <div className="flex items-center gap-4 mb-4">
          <FaMobileAlt className="text-3xl text-green-400" />
          <h3 className="text-xl font-bold text-yellow-400">Support via M-Pesa</h3>
        </div>
        <p className="mb-2 text-sm text-gray-400">Use the following steps to donate:</p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Go to M-Pesa on your phone</li>
          <li>Select <strong>Lipa na M-Pesa</strong></li>
          <li>Choose <strong>Buy Goods and Services</strong></li>
          <li>Enter Till Number: <span className="text-yellow-300 font-semibold">123456</span></li>
          <li>Enter amount and complete transaction</li>
        </ul>
        <p className="text-sm text-gray-400 italic">*This is a demo till number.</p>
      </div>

      {/* PayPal Support */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
        <div className="flex items-center gap-4 mb-4">
          <FaPaypal className="text-3xl text-blue-400" />
          <h3 className="text-xl font-bold text-yellow-400">Support via PayPal</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Prefer to donate online? Use PayPal to securely support us:
        </p>
        <a
          href="https://paypal.me/yourlink" // Replace with real link if available
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition"
        >
          Donate with PayPal
        </a>
      </div>
    </div>
  );
};

export default Support;

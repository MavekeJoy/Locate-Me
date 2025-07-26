import React from 'react';
import { FaMobileAlt, FaPaypal, FaHandsHelping } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Support = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen pt-5 px-4 sm:px-6 md:px-12 lg:px-20 transition duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Support Locate Me</h2>

      {/* Why Support */}
      <div className={`p-6 rounded-lg shadow-lg mb-10 text-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <FaHandsHelping className="text-4xl text-yellow-400 mx-auto mb-4" />
        <p className={`text-lg ${isDark ? 'text-white' : 'text-gray-700'}`}>
          Your support helps us improve Locate Me, reach more people, and reunite more families.
          Every contribution goes directly to platform maintenance and community outreach.
        </p>
      </div>

      {/* M-Pesa */}
      <div className={`p-6 rounded-lg shadow-lg mb-8 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <div className="flex items-center gap-4 mb-4">
          <FaMobileAlt className="text-3xl text-green-400" />
          <h3 className="text-xl font-bold text-yellow-400">Support via M-Pesa</h3>
        </div>
        <p className="mb-2 text-sm">Use the following steps to donate:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Go to M-Pesa on your phone</li>
          <li>Select <strong>Lipa na M-Pesa</strong></li>
          <li>Choose <strong>Buy Goods and Services</strong></li>
          <li>Enter Till Number: <span className="text-yellow-300 font-semibold">123456</span></li>
          <li>Enter amount and complete transaction</li>
        </ul>
        <p className="text-sm italic">*This is a demo till number.</p>
      </div>

      {/* PayPal */}
      <div className={`p-6 rounded-lg shadow-lg mb-8 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <div className="flex items-center gap-4 mb-4">
          <FaPaypal className="text-3xl text-blue-400" />
          <h3 className="text-xl font-bold text-yellow-400">Support via PayPal</h3>
        </div>
        <p className="mb-4">
          Prefer to donate online? Use PayPal to securely support us:
        </p>
        <a
          href="https://paypal.me/yourlink"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition"
        >
          Donate with PayPal
        </a>
      </div>

      {/* M-Changa */}
      <div className={`p-6 rounded-lg shadow-lg mb-12 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <div className="flex items-center gap-4 mb-4">
          <FaHandsHelping className="text-3xl text-green-400" />
          <h3 className="text-xl font-bold text-yellow-400">Support via M-Changa</h3>
        </div>
        <p className="mb-4">
          Contribute securely through M-Changa – Kenya's trusted mobile fundraising platform:
        </p>
        <a
          href="https://secure.changa.co.ke/myweb/share/yourcampaigncode"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-400font-semibold px-6 py-2 rounded-full hover:bg-green-300 transition"
        >
          Donate via M-Changa
        </a>
        <p className="text-sm mt-2 italic">
          You can also use M-Pesa Paybill <span className="text-yellow-300 font-semibold">891300</span> and enter your fundraiser’s account number.
        </p>
      </div>
    </div>
  );
};

export default Support;

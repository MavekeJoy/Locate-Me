import React from 'react';
import missingBg from '../assets/missing-bg.jpg';
import { FaCamera, FaSearchLocation, FaHeart } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 px-6 md:px-16 bg-gray-900">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Text Side */}
          <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl mb-6 text-yellow-400 font-bebas tracking-widest">
  LOCATE ME
</h1>


          </div>

          {/* Image Side with slide animation and rounded */}
          <div className="md:w-1/2 animate-slide-in-right">
            <img
              src={missingBg}
              alt="Missing"
              className="rounded-full shadow-lg w-[300px] h-[300px] object-cover mx-auto md:mx-0"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Why Locate Me?</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Every face deserves to be seen. Locate Me is built to bridge the gap between missing persons and those who
          can help. Whether you're a family member, a friend, or someone who's just observant — you're part of the
          solution.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-950 py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {/* Card 1 */}
          <div className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-yellow-400/60 hover:scale-105">
            <div className="p-8 transition-transform duration-500 transform group-hover:-translate-y-full">
              <FaCamera className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">Post</h3>
            </div>
            <div className="absolute inset-0 p-6 bg-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-gray-200 text-sm">
                Submit details and up to 5 images of the missing individual — fast and free.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-teal-400/60 hover:scale-105">
            <div className="p-8 transition-transform duration-500 transform group-hover:-translate-y-full">
              <FaSearchLocation className="text-5xl text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">Spot</h3>
            </div>
            <div className="absolute inset-0 p-6 bg-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-gray-200 text-sm">
                Community members can report sightings and location updates instantly.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-pink-400/60 hover:scale-105">
            <div className="p-8 transition-transform duration-500 transform group-hover:-translate-y-full">
              <FaHeart className="text-5xl text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">Reunite</h3>
            </div>
            <div className="absolute inset-0 p-6 bg-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-gray-200 text-sm">
                We connect people and information to reunite families with loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-900">
        © {new Date().getFullYear()} Locate Me. Built with purpose.
      </footer>
    </div>
  );
};

export default LandingPage;

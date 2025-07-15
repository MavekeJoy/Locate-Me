import React, { useState } from 'react';
import missingBg from '../assets/missing-bg.jpg';
import { FaCamera, FaSearchLocation, FaHeart } from 'react-icons/fa';

const LandingPage = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (index) => {
    if (window.innerWidth < 768) {
      setOpenCard(openCard === index ? null : index);
    }
  };

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

          {/* Image Side */}
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
          {[
            {
              icon: <FaCamera className="text-5xl text-yellow-400 mx-auto mb-4" />,
              title: 'Post',
              color: 'hover:shadow-yellow-400/60',
              desc: 'Submit details and up to 5 images of the missing individual — fast and free.',
            },
            {
              icon: <FaSearchLocation className="text-5xl text-teal-400 mx-auto mb-4" />,
              title: 'Spot',
              color: 'hover:shadow-teal-400/60',
              desc: 'Community members can report sightings and location updates instantly.',
            },
            {
              icon: <FaHeart className="text-5xl text-pink-400 mx-auto mb-4" />,
              title: 'Reunite',
              color: 'hover:shadow-pink-400/60',
              desc: 'We connect people and information to reunite families with loved ones.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${card.color} hover:scale-105`}
              onClick={() => handleCardClick(i)}
            >
              <div
                className={`p-8 transition-transform duration-500 transform ${
                  openCard === i ? '-translate-y-full' : ''
                } group-hover:-translate-y-full`}
              >
                {card.icon}
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </div>
              <div
                className={`absolute inset-0 p-6 bg-gray-900 flex items-center justify-center transition-opacity duration-500 ${
                  openCard === i ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-100`}
              >
                <p className="text-gray-200 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-14 pt-4 text-sm text-gray-500 bg-gray-900">
        © {new Date().getFullYear()} Locate Me. *Every Name Deserves A Way Home*.
      </footer>
    </div>
  );
};

export default LandingPage;

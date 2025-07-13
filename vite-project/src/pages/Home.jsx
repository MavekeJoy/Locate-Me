import React, { useState, useMemo } from 'react';

const dummyPosts = [
  {
    id: 1,
    name: 'Steph Kimani',
    age: 28,
    gender: 'Female',
    location: 'Nairobi CBD',
    residence: 'Westlands',
    workplace: 'KCA University',
    contact: '0712345678',
    reason: 'Went missing after work',
    date: '2025-07-08',
    photos: [
      'https://i.pinimg.com/736x/06/c3/02/06c30261c0bca81cf595d929bcd86362.jpg',
      'https://i.pinimg.com/736x/ee/9e/1a/ee9e1a41c101ca146413923cc57e1097.jpg',
    ],
  },
  {
    id: 2,
    name: 'Sam Kimani',
    age: 21,
    gender: 'Male',
    location: 'Thika Road',
    residence: 'Roysambu',
    workplace: 'JKUAT',
    contact: '0798765432',
    reason: 'Left for the shop, never returned',
    date: '2025-07-05',
    photos: [
      'https://i.pinimg.com/736x/25/a3/ec/25a3ece13a4194fc6304edf087d6b466.jpg',
      'https://i.pinimg.com/1200x/ea/a8/a1/eaa8a142e3caaed93b6b832c0d06246a.jpg',
    ],
  },
];

const Home = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [filtersVisible, setFiltersVisible] = useState(false);

  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setGenderFilter('');
    setSortOrder('newest');
  };

  const filteredPosts = useMemo(() => {
    let result = [...dummyPosts];

    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (locationFilter) {
      result = result.filter((p) =>
        p.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }
    if (genderFilter) {
      result = result.filter((p) => p.gender === genderFilter);
    }

    result.sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

    return result;
  }, [searchTerm, locationFilter, genderFilter, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-4 md:px-16 pb-10">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Reported Missing People</h2>

      {/* Filter Toggle Button for Mobile */}
      <div className="md:hidden mb-4 flex justify-between items-center">
        <button
          onClick={() => setFiltersVisible(!filtersVisible)}
          className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
        >
          {filtersVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
        <button
          onClick={clearFilters}
          className= "ml-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Clear Filters
        </button>
      </div>

      {/* Filters */}
      {(filtersVisible || window.innerWidth >= 768) && (
        <div className="bg-gray-800 p-4 rounded-lg mb-8 grid md:grid-cols-5 gap-4 text-sm">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded col-span-1"
          />
          <input
            type="text"
            placeholder="Filter by location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded col-span-1"
          />
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded col-span-1"
          >
            <option value="">All Genders</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded col-span-1"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <button
            onClick={clearFilters}
            className="hidden md:block px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">No results found.</p>
        ) : (
          filteredPosts.map((person) => (
            <div
              key={person.id}
              onClick={() => toggleCard(person.id)}
              className="cursor-pointer bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.01]"
            >
              <img
                src={person.photos[0]}
                alt={person.name}
                className="w-full h-64 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                <p className="text-sm text-gray-400">Last Seen: {person.location}</p>
                <p className="text-xs text-yellow-400">📅 Posted: {person.date}</p>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out px-4 pb-4 ${
                  openCardId === person.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="space-y-2 text-sm text-gray-300">
                  <p><span className="font-semibold text-yellow-300">Age:</span> {person.age}</p>
                  <p><span className="font-semibold text-yellow-300">Gender:</span> {person.gender}</p>
                  <p><span className="font-semibold text-yellow-300">Residence:</span> {person.residence}</p>
                  <p><span className="font-semibold text-yellow-300">Workplace:</span> {person.workplace}</p>
                  <p><span className="font-semibold text-yellow-300">Reason:</span> {person.reason}</p>
                  <p><span className="font-semibold text-yellow-300">Contact:</span> {person.contact}</p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {person.photos.slice(1).map((url, i) =>
                      url ? (
                        <img
                          key={i}
                          src={url}
                          alt={`Extra ${i + 1}`}
                          className="w-full h-32 object-cover rounded"
                        />
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

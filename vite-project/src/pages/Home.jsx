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
  const [comments, setComments] = useState({});
  const [replyingTo, setReplyingTo] = useState({});

  const toggleCard = (id, forceOpen = false) => {
    setOpenCardId(forceOpen ? id : openCardId === id ? null : id);
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
      return sortOrder === 'newest'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });

    return result;
  }, [searchTerm, locationFilter, genderFilter, sortOrder]);

  const handleCommentSubmit = (id, text, parentId = null) => {
    if (!text.trim()) return;
    setComments((prev) => {
      const postComments = prev[id] || [];
      const newComment = {
        id: Date.now(),
        text,
        parentId,
        timestamp: new Date(),
      };
      return {
        ...prev,
        [id]: [...postComments, newComment],
      };
    });
  };

  const handleDeleteComment = (postId, commentId) => {
    setComments((prev) => {
      return {
        ...prev,
        [postId]: prev[postId].filter(
          (c) => c.id !== commentId && c.parentId !== commentId
        ),
      };
    });
  };

  const renderComments = (postId, parentId = null) => {
    const postComments = comments[postId] || [];
    return postComments
      .filter((c) => c.parentId === parentId)
      .map((c) => (
        <div key={c.id} className="mt-2 ml-4 border-l border-yellow-500 pl-2">
          <p className="text-sm text-white">{c.text}</p>
          <div className="flex gap-2 text-xs mt-1">
            <button
              className="text-yellow-400 hover:underline"
              onClick={() => setReplyingTo({ postId, parentId: c.id })}
            >
              Reply
            </button>
            <button
              className="text-red-400 hover:underline"
              onClick={() => handleDeleteComment(postId, c.id)}
            >
              Delete
            </button>
          </div>
          {replyingTo.postId === postId && replyingTo.parentId === c.id && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Write a reply..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCommentSubmit(postId, e.target.value, c.id);
                    e.target.value = '';
                    setReplyingTo({});
                  }
                }}
                className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
              />
            </div>
          )}
          {renderComments(postId, c.id)}
        </div>
      ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-4 md:px-16 pb-10">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
        Reported Missing People
      </h2>

      {/* Filters */}
      <div className="md:hidden mb-4 flex justify-between items-center">
        <button
          onClick={() => setFiltersVisible(!filtersVisible)}
          className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
        >
          {filtersVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
        <button
          onClick={clearFilters}
          className="ml-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Clear Filters
        </button>
      </div>

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
        {filteredPosts.map((person) => (
          <div
            key={person.id}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.01]"
          >
            <img
              src={person.photos[0]}
              alt={person.name}
              className="w-full h-64 object-cover rounded-t"
              onClick={() => toggleCard(person.id)}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">{person.name}</h3>
              <p className="text-sm text-gray-400">Last Seen: {person.location}</p>
              <p className="text-xs text-yellow-400">📅 Posted: {person.date}</p>
            </div>

            <div
              className={`transition-all duration-300 px-4 pb-4 ${
                openCardId === person.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-yellow-300">Age:</span> {person.age}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Gender:</span> {person.gender}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Residence:</span> {person.residence}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Workplace:</span> {person.workplace}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Reason:</span> {person.reason}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Contact:</span> {person.contact}
                </p>

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

                {/* Comments */}
                <div className="mt-4">
                  <h4 className="text-yellow-400 font-semibold mb-2">Comments</h4>
                  {renderComments(person.id)}
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    onFocus={() => toggleCard(person.id, true)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleCommentSubmit(person.id, e.target.value);
                        e.target.value = '';
                      }
                    }}
                    className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

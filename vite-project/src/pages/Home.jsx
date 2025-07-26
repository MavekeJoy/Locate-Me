import React, { useState, useMemo } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext'; // ✅ Import Theme context
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
  const { theme } = useTheme(); // ✅ Access current theme
  const [openCardId, setOpenCardId] = useState(null);
  const [modalPerson, setModalPerson] = useState(null);
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
    if (searchTerm) result = result.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (locationFilter) result = result.filter((p) => p.location.toLowerCase().includes(locationFilter.toLowerCase()));
    if (genderFilter) result = result.filter((p) => p.gender === genderFilter);
    result.sort((a, b) =>
      sortOrder === 'newest' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
    );
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
      return { ...prev, [id]: [...postComments, newComment] };
    });
  };

  const handleDeleteComment = (postId, commentId) => {
    setComments((prev) => ({
      ...prev,
      [postId]: prev[postId].filter((c) => c.id !== commentId && c.parentId !== commentId),
    }));
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
    <div
      className={`min-h-screen pt-4 px-4 md:px-16 pb-8 transition duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
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
          className={`ml-2 px-4 py-2 rounded hover:bg-gray-600 ${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          Clear Filters
        </button>
      </div>

      {(filtersVisible || window.innerWidth >= 768) && (
        <div
          className={`p-4 rounded-lg mb-8 grid md:grid-cols-5 gap-4 text-sm ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}
        >
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`p-2 rounded col-span-1 ${
              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black border'
            }`}
          />
          <input
            type="text"
            placeholder="Filter by location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className={`p-2 rounded col-span-1 ${
              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black border'
            }`}
          />
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className={`p-2 rounded col-span-1 ${
              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black border'
            }`}
          >
            <option value="">All Genders</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={`p-2 rounded col-span-1 ${
              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black border'
            }`}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <button
            className={`hidden md:block px-4 py-2 rounded hover:bg-gray-600 ${
              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={clearFilters}
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
            className={`rounded-lg shadow-md overflow-hidden hover:scale-[1.01] transition ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white border'
            }`}
          >
            <img
              src={person.photos[0]}
              alt={person.name}
              className="w-full h-64 object-cover rounded-t cursor-pointer"
              onClick={() => setModalPerson(person)}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">{person.name}</h3>
              <p className="text-sm text-gray-400">Last Seen: {person.location}</p>
              <p className="text-xs text-yellow-400">📅 Posted: {person.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalPerson && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-2xl relative p-6">
            <button
              onClick={() => setModalPerson(null)}
              className="absolute top-3 right-3 text-white hover:text-red-400 text-xl"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <img
                src={modalPerson.photos[0]}
                alt={modalPerson.name}
                className="w-full md:w-1/2 h-60 object-cover rounded-lg"
              />
              <div className="flex-1 space-y-1 text-sm md:text-base">
                <h2 className="text-xl font-bold text-yellow-400">{modalPerson.name}</h2>
                <p><strong>Age:</strong> {modalPerson.age}</p>
                <p><strong>Gender:</strong> {modalPerson.gender}</p>
                <p><strong>Residence:</strong> {modalPerson.residence}</p>
                <p><strong>Workplace:</strong> {modalPerson.workplace}</p>
                <p><strong>Last Seen:</strong> {modalPerson.location}</p>
                <p><strong>Date Posted:</strong> {modalPerson.date}</p>
                <p><strong>Contact:</strong> {modalPerson.contact}</p>
                <p><strong>Reason:</strong> {modalPerson.reason}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {modalPerson.photos.slice(1).map((url, i) =>
                url && (
                  <img
                    key={i}
                    src={url}
                    alt={`Extra ${i + 2}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

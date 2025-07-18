// src/components/ImageModal.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <button
        className="absolute top-4 right-4 text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-red-600 transition"
        onClick={onClose}
      >
        <FaTimes />
      </button>
      <img
        src={imageSrc}
        alt="Zoomed"
        className="max-w-full max-h-[90vh] rounded-lg shadow-lg border-4 border-yellow-400"
      />
    </div>
  );
};

export default ImageModal;

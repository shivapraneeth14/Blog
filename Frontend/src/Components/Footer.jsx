import React, { useState } from 'react';
import BlogForm from './BlogForm';
import { FaPlus } from 'react-icons/fa';

function Footer() {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(!showForm); 
  };

  return (
    <div>
      <div className="flex-grow"></div>

      <div className="fixed bottom-0 left-0 w-full bg-gray-200 text-black py-2 border-t border-gray-300 shadow-lg z-20 rounded-tl-lg rounded-tr-3xl">
        <div className="text-center">
          <button
            className="bg-blue-500 text-white p-3 rounded-full border border-gray-300 hover:bg-blue-600 transition duration-300"
            onClick={handleAddClick}
          >
            <FaPlus size={20} />
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-30">
            <BlogForm onClose={() => setShowForm(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;

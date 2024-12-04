import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='w-full h-full bg-black py-4 border-b-gray-500 text-center rounded-b-3xl shadow-slate-400'>
          <h1 className='font-bold text-4xl text-white'>Logo</h1>
        </div>
        <div className='w-3/4 h-auto border-2 border-gray-300 mt-1 rounded-3xl flex justify-evenly p-2 shadow-lg'>
          <div className='w-auto h-auto px-3 py-2 rounded-3xl border-2 border-gray-300 shadow-md hover:shadow-xl transition-all'>
            <Link to="Home" className="text-gray-700 hover:text-blue-500">Home</Link>
          </div>
          <div className='w-auto h-auto px-3 py-2 rounded-3xl border-2 border-gray-300 shadow-md hover:shadow-xl transition-all'>
            <Link to="Sport" className="text-gray-700 hover:text-blue-500">Sport</Link>
          </div>
          <div className='w-auto h-auto px-3 py-2 rounded-3xl border-2 border-gray-300 shadow-md hover:shadow-xl transition-all'>
            <Link to="Entertainment" className="text-gray-700 hover:text-blue-500">Entertainment</Link>
          </div>
          <div className='w-auto h-auto px-3 py-2 rounded-3xl border-2 border-gray-300 shadow-md hover:shadow-xl transition-all'>
            <Link to="Culture" className="text-gray-700 hover:text-blue-500">Culture</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;


import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-6xl font-bold text-red-600 mb-6">Welcome to LensVerse</h1>
        <p className="max-w-xl text-center mb-4">
          Capture your moments perfectly with our expert photographers.
        </p>
        <button className="bg-red-600 hover:bg-red-700 transition duration-300 px-6 py-3 rounded text-black font-semibold">
          View Portfolio
        </button>
      </div>
    </>
  );
};

export default Home;

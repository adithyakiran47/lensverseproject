import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-extrabold text-red-600 mb-6">Welcome to LensVerse</h1>
      <p className="max-w-xl text-center text-lg mb-6">
        Capture your moments perfectly with our awesome photography services.
      </p>
      <button className="bg-red-600 hover:bg-red-700 text-black px-6 py-3 rounded font-semibold transition">
        Explore Portfolio
      </button>
    </div>
  </>
);

export default Home;

import React from 'react';
import Navbar from '../components/Navbar';

const images = [
  'https://via.placeholder.com/300x200.png?text=Work+1',
  'https://via.placeholder.com/300x200.png?text=Work+2',
  'https://via.placeholder.com/300x200.png?text=Work+3',
  'https://via.placeholder.com/300x200.png?text=Work+4',
  // Add more placeholder URLs or actual AWS S3 image URLs later
];

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sample portfolio items */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-800 rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src={`https://picsum.photos/400/300?random=${i}`}
                alt="Portfolio Item"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl text-red-500 font-semibold mb-2">Project {i+1}</h3>
                <p>Photography description here</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

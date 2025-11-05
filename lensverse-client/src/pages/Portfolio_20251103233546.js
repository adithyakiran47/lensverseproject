import React from 'react';
import Navbar from '../components/Navbar';

const images = [
  'https://via.placeholder.com/300x200.png?text=Work+1',
  'https://via.placeholder.com/300x200.png?text=Work+2',
  'https://via.placeholder.com/300x200.png?text=Work+3',
  'https://via.placeholder.com/300x200.png?text=Work+4',
  // Add more placeholder URLs or actual AWS S3 image URLs later
];

const Portfolio = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-4xl font-bold text-red-600 mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-gray-900 hover:bg-gray-800"
          >
            <img
              src={`https://picsum.photos/400/300?random=${idx}`}
              alt={`Portfolio ${idx + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-red-500 font-semibold mb-2">Project {idx + 1}</h3>
              <p>Photography description here</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Portfolio;

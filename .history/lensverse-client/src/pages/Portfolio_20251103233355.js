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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
  {/* Sample Portfolio Items */}
  {Array.from({ length: 6 }).map((_, i) => (
    <div
      key={i}
      className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl bg-gray-900 hover:bg-gray-800"
    >
      <img src={`https://picsum.photos/400/300?sig=${i}`} alt={`Portfolio ${i + 1}`} className="w-full h-48 object-cover"/>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-red-500">Project {i + 1}</h3>
        <p className="text-sm">Description of project {i + 1}</p>
      </div>
    </div>
  ))}
</div>
      </div>
    </>
  );
};

export default Portfolio;

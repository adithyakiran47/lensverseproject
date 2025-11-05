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
      <div className="container mt-5">
        <h2>Portfolio Gallery</h2>
        <div className="row">
          {images.map((url, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={url} alt={`Work ${index + 1}`} className="card-img-top" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

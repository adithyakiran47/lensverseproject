import React from 'react';
import Navbar from '../components/Navbar';

/*const images = [
  'https://via.placeholder.com/300x200.png?text=Work+1',
  'https://via.placeholder.com/300x200.png?text=Work+2',
  'https://via.placeholder.com/300x200.png?text=Work+3',
  'https://via.placeholder.com/300x200.png?text=Work+4',
  // Add more placeholder URLs or actual AWS S3 image URLs later
];
*/
const Portfolio = () => {
  const portfolioItems = Array.from({ length: 6 });

  return (
    <>
      <Navbar />
      <div className="container  py-4 bg-black  d-flex text-white min-vh-100">
        <h2 className="text-danger mb-4">Portfolio</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {portfolioItems.map((_, idx) => (
            <div key={idx} className="col">
              <div className="card bg-dark text-white h-100 shadow-sm hover-shadow">
                <img src={`https://placeimg.com/400/300/any?t=${idx}`} className="card-img-top" alt={`Portfolio ${idx + 1}`} />
                <div className="card-body">
                  <h5 className="card-title text-danger">Project {idx + 1}</h5>
                  <p className="card-text">Photography project description...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

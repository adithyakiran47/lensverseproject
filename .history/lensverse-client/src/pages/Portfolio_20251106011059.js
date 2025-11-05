import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const categories = [
    {
      id: 'events',
      title: 'Event Coverage',
      image: 'https://lensverseproject-production.up.railway.app/assets/DSC04211.JPG', // fixed to forward slashes and local server URL
      description: 'Corporate events, weddings, and special occasions captured with precision and style.',
    },
    {
      id: 'automotive',
      title: 'Automotive',
      image: 'https://lensverseproject-production.up.railway.app/assets/DSC02055.jpeg', // corrected path
      description: 'Stunning automotive photography showcasing the beauty and power of vehicles.',
    },
    {
      id: 'portraits',
      title: 'Portraits',
      image: 'https://lensverseproject-production.up.railway.app/assets/DSC04285.JPG', // locally hosted portrait example
      description: 'Professional portraits that capture personality and essence.',
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Portfolio Header */}
      <div className="portfolio-header bg-black text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Our Services</h1>
          <p className="lead">Explore our specialized photography categories</p>
        </div>
      </div>

      {/* Category Cards */}
      <div className="portfolio-categories bg-dark py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {categories.map(category => (
              <div className="col-md-4" key={category.id}>
                <div className="category-card card bg-black text-white h-100 border-0">
                  <div className="card-image-wrapper">
                    <img 
                      src={category.image} 
                      className="card-img-top" 
                      alt={category.title}
                      onError={(e) => {
                        e.target.src = '/placeholder-image.jpg';
                      }}
                    />
                    
                  </div>
                  <div className="card-body text-center">
                    <h3 className="card-title text-danger h4 mb-3">{category.title}</h3>
                    <p className="card-text text-muted">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Now Section */}
      <div className="bg-danger text-white py-5">
        <div className="container text-center">
          <h2 className="h3 mb-4">Ready to capture your moments?</h2>
          <Link to="/booking" className="btn btn-light btn-lg px-4">
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

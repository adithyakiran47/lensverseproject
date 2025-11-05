import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  // AWS S3 base URL - replace with your actual S3 bucket URL
  const S3_BASE_URL = 'https://your-bucket-name.s3.amazonaws.com/portfolio';

  // Simplified portfolio items with your specific categories
  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Event',
      category: 'events',
      image: `${S3_BASE_URL}/events/corporate-event-1.jpg`,
      description: 'Annual Tech Conference Coverage'
    },
    {
      id: 2,
      title: 'Wedding Reception',
      category: 'events',
      image: `${S3_BASE_URL}/events/wedding-event-1.jpg`,
      description: 'Wedding ceremony and reception photography'
    },
    {
      id: 3,
      title: 'Professional Headshot',
      category: 'portraits',
      image: `${S3_BASE_URL}/portraits/professional-1.jpg`,
      description: 'Corporate headshot photography'
    },
    {
      id: 4,
      title: 'Family Portrait',
      category: 'portraits',
      image: `${S3_BASE_URL}/portraits/family-1.jpg`,
      description: 'Outdoor family portrait session'
    },
    {
      id: 5,
      title: 'Luxury Sports Car',
      category: 'automotive',
      image: `${S3_BASE_URL}/automotive/sports-car-1.jpg`,
      description: 'High-end automotive photography'
    },
    {
      id: 6,
      title: 'Classic Car Show',
      category: 'automotive',
      image: `${S3_BASE_URL}/automotive/classic-car-1.jpg`,
      description: 'Vintage and classic car photography'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'events', label: 'Event Coverage' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'automotive', label: 'Automotive' }
  ];

  const filteredItems = portfolioItems.filter(item => 
    filter === 'all' || item.category === filter
  );

  return (
    <>
      <Navbar />
      
      {/* Portfolio Header */}
      <div className="portfolio-header bg-black text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Our Portfolio</h1>
          
          {/* Category Filters */}
          <div className="category-filters mb-5">
            {categories.map(category => (
              <button
                key={category.id}
                className={`btn ${filter === category.id ? 'btn-danger' : 'btn-outline-danger'} m-2`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid bg-dark py-5">
        <div className="container">
          <div className="row g-4">
            {filteredItems.map(item => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="portfolio-item card bg-black text-white border-0">
                  <div className="portfolio-image-wrapper">
                    <img 
                      src={item.image} 
                      className="card-img-top" 
                      alt={item.title}
                      onError={(e) => {
                        e.target.src = '/placeholder-image.jpg'; // Fallback image
                      }}
                    />
                    <div className="portfolio-overlay">
                      <div className="overlay-content">
                        <p className="mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-danger">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-danger text-white py-5">
        <div className="container text-center">
          <h2 className="h3 mb-4">Interested in our photography services?</h2>
          <a href="/booking" className="btn btn-light btn-lg px-4">
            Book a Session
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
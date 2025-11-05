import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  // Sample portfolio items - replace with your actual data
  const portfolioItems = [
    {
      id: 1,
      title: 'Wedding Photography',
      category: 'wedding',
      image: 'https://source.unsplash.com/800x600/?wedding',
      description: 'Capturing beautiful moments of love and celebration',
      client: 'Sarah & John',
      date: '2025'
    },
    {
      id: 2,
      title: 'Corporate Event',
      category: 'event',
      image: 'https://source.unsplash.com/800x600/?corporate',
      description: 'Professional coverage of business conferences and meetings',
      client: 'Tech Corp',
      date: '2025'
    },
    {
      id: 3,
      title: 'Fashion Portfolio',
      category: 'fashion',
      image: 'https://source.unsplash.com/800x600/?fashion',
      description: 'High-end fashion photography for models and brands',
      client: 'Style Magazine',
      date: '2025'
    },
    {
      id: 4,
      title: 'Product Photography',
      category: 'commercial',
      image: 'https://source.unsplash.com/800x600/?product',
      description: 'Stunning product shots for e-commerce and advertising',
      client: 'Luxury Brand',
      date: '2025'
    },
    {
      id: 5,
      title: 'Nature Documentary',
      category: 'video',
      image: 'https://source.unsplash.com/800x600/?nature',
      description: 'Cinematic nature footage and wildlife documentation',
      client: 'Wildlife Channel',
      date: '2025'
    },
    {
      id: 6,
      title: 'Portrait Session',
      category: 'portrait',
      image: 'https://source.unsplash.com/800x600/?portrait',
      description: 'Professional portrait photography for individuals',
      client: 'Various Clients',
      date: '2025'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'event', label: 'Events' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'video', label: 'Videography' },
    { id: 'portrait', label: 'Portraits' }
  ];

  const filteredItems = portfolioItems.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Navbar />
      
      {/* Portfolio Header */}
      <div className="portfolio-header bg-black text-white py-5">
        <div className="container text-center" data-aos="fade-up">
          <h1 className="display-3 fw-bold mb-4">Our Portfolio</h1>
          <p className="lead mb-4">Explore our creative work and visual storytelling</p>
          
          {/* Search Bar */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-dark text-white border-danger"
                  placeholder="Search portfolio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="input-group-text bg-danger text-white">
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters" data-aos="fade-up" data-aos-delay="100">
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
              <div className="col-md-6 col-lg-4" key={item.id} data-aos="fade-up">
                <div className="portfolio-item card bg-black text-white border-0">
                  <div className="portfolio-image-wrapper">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="portfolio-overlay">
                      <div className="overlay-content">
                        <h5 className="mb-2">{item.title}</h5>
                        <p className="mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-danger">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">{item.client}</small>
                      <small className="text-danger">{item.date}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-danger text-white py-5">
        <div className="container text-center" data-aos="fade-up">
          <h2 className="display-5 mb-4">Want to Create Something Amazing?</h2>
          <p className="lead mb-4">Let's work together to bring your vision to life</p>
          <button className="btn btn-light btn-lg px-5 rounded-pill">
            Contact Us
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
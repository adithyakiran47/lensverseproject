import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="min-vh-100 bg-black text-white d-flex flex-column justify-content-center align-items-center p-4">
        <h1 className="display-1 fw-bold text-danger mb-4">Welcome to Lensverse</h1>
        <p className="lead text-center mb-3">Your moments, our passion</p>
        <Link to="/portfolio" className="btn btn-danger btn-lg">Explore Portfolio</Link>
      </div>

      {/* Features Section */}
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border border-danger rounded">
                <h3 className="text-danger">Photography</h3>
                <p>Professional photography services for events, portraits, and commercial needs</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border border-danger rounded">
                <h3 className="text-danger">Videography</h3>
                <p>Cinematic video production for weddings, corporate events, and promotional content</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border border-danger rounded">
                <h3 className="text-danger">Editing</h3>
                <p>Expert photo and video editing services to perfect your visual content</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="bg-black text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="display-4 text-danger mb-4">Why Choose Us?</h2>
              <ul className="list-unstyled">
                <li className="mb-3">✨ Professional equipment and expertise</li>
                <li className="mb-3">✨ Creative and unique perspective</li>
                <li className="mb-3">✨ Timely delivery and satisfaction guaranteed</li>
              </ul>
              <Link to="/about" className="btn btn-outline-danger">Learn More</Link>
            </div>
            <div className="col-md-6">
              <div className="p-4 bg-dark rounded">
                <blockquote className="blockquote">
                  <p className="mb-0">"Capturing life's precious moments with artistic excellence"</p>
                  <footer className="blockquote-footer text-danger">The Lensverse Team</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-danger text-white py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4">Ready to Create Something Amazing?</h2>
          <p className="lead mb-4">Let's turn your vision into reality</p>
          <Link to="/booking" className="btn btn-light btn-lg px-5">Book Now</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
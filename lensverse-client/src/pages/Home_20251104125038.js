import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section with Parallax Effect */}
      <div className="hero-section min-vh-100 bg-black text-white d-flex flex-column justify-content-center align-items-center p-4 position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-pattern"></div>
        <div className="content-wrapper position-relative z-1 text-center" data-aos="fade-up">
          <h1 className="display-1 fw-bold mb-4">
            <span className="text-white">Welcome to </span>
            <span className="text-danger">Lensverse</span>
          </h1>
          <p className="lead text-center mb-4 fs-4 fw-light">
            Where every moment becomes <span className="text-danger">timeless</span>
          </p>
          <Link to="/portfolio" className="btn btn-danger btn-lg px-5 py-3 rounded-pill hover-scale">
            Explore Portfolio
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>

      {/* Features Section with Cards */}
      <div className="bg-dark text-white py-6">
        <div className="container">
          <h2 className="text-center display-4 mb-5" data-aos="fade-up">Our Services</h2>
          <div className="row g-4">
            {[
              {
                icon: 'bi-camera',
                title: 'Photography',
                desc: 'Professional photography services for events, portraits, and commercial needs',
              },
              {
                icon: 'bi-camera-reels',
                title: 'Videography',
                desc: 'Cinematic video production for weddings, corporate events, and promotional content',
              },
              {
                icon: 'bi-pencil-square',
                title: 'Editing',
                desc: 'Expert photo and video editing services to perfect your visual content',
              }
            ].map((service, index) => (
              <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card bg-black text-white h-100 service-card border-0">
                  <div className="card-body p-4 text-center">
                    <i className={`bi ${service.icon} display-4 text-danger mb-3`}></i>
                    <h3 className="text-danger h4 mb-3">{service.title}</h3>
                    <p className="opacity-75">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Preview Section with Stats */}
      <div className="bg-black text-white py-6">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="display-4 text-danger mb-4">Why Choose Us?</h2>
              <ul className="list-unstyled feature-list">
                <li className="mb-4 d-flex align-items-center">
                  <span className="feature-icon me-3">✨</span>
                  <span>Professional equipment and cutting-edge technology</span>
                </li>
                <li className="mb-4 d-flex align-items-center">
                  <span className="feature-icon me-3">✨</span>
                  <span>Creative direction and unique artistic perspective</span>
                </li>
                <li className="mb-4 d-flex align-items-center">
                  <span className="feature-icon me-3">✨</span>
                  <span>100% satisfaction guarantee with timely delivery</span>
                </li>
              </ul>
              <Link to="/about" className="btn btn-outline-danger btn-lg rounded-pill px-4 hover-scale">
                Discover More
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="row g-3">
                {[
                  { number: '20+', label: 'Projects Completed' },
                  { number: '50+', label: 'Happy Clients' },
                  { number: '3+', label: 'Years Experience' },
                  { number: '5⭐', label: 'Average Rating' }
                ].map((stat, index) => (
                  <div className="col-6" key={index}>
                    <div className="p-4 bg-dark rounded-3 text-center stat-card">
                      <h3 className="display-4 text-danger mb-2">{stat.number}</h3>
                      <p className="mb-0 text-light">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-dark text-white py-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up">
              <h2 className="display-4 mb-5">What Clients Say</h2>
              <div className="testimonial-card bg-black p-5 rounded-3">
                <i className="bi bi-quote display-3 text-danger mb-4"></i>
                <blockquote className="blockquote">
                  <p className="mb-4 fs-5">"Lensverse transformed our special moments into timeless memories. Their attention to detail and creative approach exceeded all our expectations."</p>
                  <footer className="text-danger fs-6">- Sarah Johnson, Wedding Client</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section by Email */}
<div className="contact-section bg-dark text-white py-5">
  <div className="container text-center">
    <h2 className="display-5 mb-3">Contact Us</h2>
    <p className="mb-4">For inquiries and bookings, reach out by email:</p>
    <a
      href="mailto:lensverse@example.com"
      className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill"
      style={{ textDecoration: "none" }}
    >
      lensversecontact@example.com
    </a>
  </div>
</div>


      {/* Call to Action Section */}
      <div className="cta-section position-relative py-6 overflow-hidden">
        <div className="container text-center position-relative z-1" data-aos="zoom-in">
          <h2 className="display-4 text-white mb-4">Ready to Create Something Amazing?</h2>
          <p className="lead text-white mb-5">Let's turn your vision into reality</p>
          <Link to="/booking" className="btn btn-light btn-lg px-5 py-3 rounded-pill hover-scale">
            Book Your Session Now
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
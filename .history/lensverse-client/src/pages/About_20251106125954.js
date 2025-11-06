// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Aboutt.css';

const CREATORS = [
  {
    name: "Adithya Kiran V", // Replace with actual name
    role: "Lead Photographer & Co-founder",
    bio: "A passionate photographer with an eye for capturing life's beautiful moments. Started Lensverse with the vision of making professional photography accessible to everyone.",
    image: 'https://lensverseproject-production.up.railway.app/assets/ak.JPG', // Add creator's image to public folder
    social: {
      instagram: "https://instagram.com/creator1", // Replace with actual Instagram URL
      linkedin: "https://linkedin.com/in/creator1" // Replace with actual LinkedIn URL
    }
  },
  {
    name: "Arun VL", // Replace with actual name
    role: "Creative Director & Co-founder",
    bio: "An innovative photographer who brings artistic vision to every shoot. Met during college and partnered to create Lensverse, combining technical expertise with creative excellence.",
    image: 'https://lensverseproject-production.up.railway.app/assets/vl.jpg', // Add creator's image to public folder
    social: {
      instagram: "https://instagram.com/creator2", // Replace with actual Instagram URL
      linkedin: "https://linkedin.com/in/creator2" // Replace with actual LinkedIn URL
    }
  }
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-header">
          <h1>About <span className="text-danger">Lensverse</span></h1>
          <p className="lead">
            Founded by two college friends with a shared passion for photography,
            Lensverse emerged from a vision to capture life's precious moments in their most authentic form.
          </p>
        </div>

        <div className="creators-grid">
          {CREATORS.map((creator, index) => (
            <div key={index} className="creator-card">
              <div className="creator-image-container">
                <img 
                  src={creator.image} 
                  alt={creator.name}
                  className="creator-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x500?text=Creator+Photo';
                  }}
                />
              </div>
              <div className="creator-info">
                <h2>{creator.name}</h2>
                <h3>{creator.role}</h3>
                <p>{creator.bio}</p>
                <div className="social-links">
                  <a 
                    href={creator.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a 
                    href={creator.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link linkedin"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="about-footer">
          <h2>Our Story</h2>
          <p>
            What started as a friendship in college blossomed into a creative partnership
            that would become Lensverse. Our shared love for photography and commitment
            to excellence drives us to deliver exceptional photography services to our clients.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
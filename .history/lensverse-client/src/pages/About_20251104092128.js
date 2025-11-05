import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-content">
              <h2>About Us - LENSVERSE</h2>
              <p><em>Live and breathe photography, capturing moments that tell stories and evoke emotions.</em></p>
              <ul>
                <li><b>Storytellers:</b> We capture moments that speak volumes.</li>
                <li><b>Creative Vision:</b> Blending tradition with innovation for unique images.</li>
                <li><b>Top-Tier Quality:</b> Using the latest gear for stunning, high-quality photos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <Navbar />
    <div className="min-vh-100 bg-black text-white d-flex flex-column justify-content-center align-items-center p-4">
      <h1 className="display-1 fw-bold text-danger mb-4">Welcome to LensVerse</h1>
      <p className="lead text-center mb-3">Your moments, our passion</p>
      <button className="btn btn-danger btn-lg">Explore Portfolio</button>
    </div>
  </>
);

export default Home;

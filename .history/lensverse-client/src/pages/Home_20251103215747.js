import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome to LensVerse</h1>
        <p>Your creative consultation portfolio platform</p>
      </div>
    </>
  );
};

<div className="container mt-5">
  <div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">Showcase Your Creative Work</h1>
      <p className="col-md-8 fs-4">Connect with clients and share your portfolio effortlessly.</p>
      <button className="btn btn-primary btn-lg" type="button" onClick={() => window.location.href='/portfolio'}>
        View Portfolio
      </button>
    </div>
  </div>
</div>


export default Home;

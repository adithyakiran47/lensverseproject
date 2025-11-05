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

export default Home;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  return (
    <nav className="bg-black p-4 shadow-lg flex flex-wrap justify-between items-center text-white">
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-red-500 transition">Home</Link>
        <Link to="/portfolio" className="hover:text-red-500 transition">Portfolio</Link>
        <Link to="/booking" className="hover:text-red-500 transition">Booking</Link>
        <Link to="/admin-dashboard" className="hover:text-red-500 transition">Admin Dashboard</Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 rounded px-4 py-2 text-black font-bold transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

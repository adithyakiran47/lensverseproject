import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  return (
    <nav className="bg-black p-4 shadow-lg flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white hover:text-red-500 transition duration-300 hover:underline">Home</Link>
        <Link to="/admin-dashboard" className="text-white hover:text-red-500 transition duration-300 hover:underline">Dashboard</Link>
        <Link to="/admin-login" className="text-white hover:text-red-500 transition duration-300 hover:underline">Login</Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition duration-300 text-white font-semibold"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

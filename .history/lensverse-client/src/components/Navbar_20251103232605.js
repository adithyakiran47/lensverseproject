// src/components/Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center text-white shadow-lg">
      <div className="flex space-x-4">
        <Link className="hover:text-red-500" to="/">Home</Link>
        <Link className="hover:text-red-500" to="/admin-dashboard">Admin Dashboard</Link>
        <Link className="hover:text-red-500" to="/admin-login">Login</Link>
      </div>
      <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition">Logout</button>
    </nav>
  );
};

export default Navbar;

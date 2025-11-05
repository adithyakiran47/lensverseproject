// src/pages/AdminLogin.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', formData);
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <form className="bg-gray-800 p-8 rounded shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-4">Admin Login</h2>
          <input
            className="w-full p-3 mb-4 text-black rounded"
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={handleChange}
          />
          <input
            className="w-full p-3 mb-4 text-black rounded"
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
          />
          <button className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded" type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;

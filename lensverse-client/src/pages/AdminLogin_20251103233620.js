import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', formData);
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin-dashboard');
    } catch {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-900 p-8 rounded shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Admin Login</h2>
          <input
            className="w-full p-3 rounded bg-gray-800 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 rounded bg-gray-800 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 rounded py-3 font-semibold transition text-black"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;

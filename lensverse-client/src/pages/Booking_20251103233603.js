import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    date: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      setMessage('Booking submitted!');
      setFormData({ name: '', email: '', serviceType: '', date: '' });
    } catch {
      setMessage('Booking failed.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
        <form className="w-full max-w-lg bg-gray-900 p-8 rounded shadow-lg space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-red-600">Book Your Session</h2>
          {message && <p className="text-green-400">{message}</p>}
          <input
            className="w-full p-3 rounded bg-gray-800 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 rounded bg-gray-800 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 rounded bg-gray-800 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            name="serviceType"
            placeholder="Service Type"
            value={formData.serviceType}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 rounded bg-gray-800 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 rounded py-3 font-semibold transition text-black">
            Book Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Booking;

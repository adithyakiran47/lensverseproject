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

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      setMessage('Booking submitted successfully!');
      setFormData({ name: '', email: '', serviceType: '', date: '' });
    } catch (err) {
      setMessage('Failed to submit booking. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
        <h2 className="text-4xl mb-6 text-red-600 font-bold">Book Your Session</h2>
        {message && <p className="mb-4 text-green-400">{message}</p>}
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-900 p-6 rounded shadow-lg">
          <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
          <input
            className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-red-600 focus:border-red-400 transition"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
          <input
            className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-red-600 focus:border-red-400 transition"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="block mb-2 font-semibold" htmlFor="serviceType">Service Type</label>
          <input
            className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-red-600 focus:border-red-400 transition"
            type="text"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          />
          <label className="block mb-2 font-semibold" htmlFor="date">Date</label>
          <input
            className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-red-600 focus:border-red-400 transition"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button
            className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-3 rounded text-black font-semibold"
            type="submit"
          >
            Book Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Booking;

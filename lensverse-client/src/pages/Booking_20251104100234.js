// Booking page
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', email: '', serviceType: '', date: '' });
  const [message, setMessage] = useState('');

  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      setMessage('Booking submitted successfully!');
      setFormData({ name: '', email: '', serviceType: '', date: '' });
    } catch {
      setMessage('Booking submission failed.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-4 bg-black text-white min-vh-100">
        <h2 className="text-danger mb-4">Book a Session</h2>
        {message && <div className="alert alert-success">{message}</div>}
        <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow-lg">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control bg-black text-white"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control bg-black text-white"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="serviceType" className="form-label">Service Type</label>
            <input
              type="text"
              name="serviceType"
              className="form-control bg-black text-white"
              id="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input
              type="date"
              name="date"
              className="form-control bg-black text-white"
              id="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-danger" type="submit">Book Now</button>
        </form>
      </div>
    </>
  );
};

export default Booking;
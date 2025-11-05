// src/pages/Booking.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../utils/api';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', email: '', serviceType: '', date: '' });
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setSubmitting(true);
    try {
      await api.post('/bookings', formData);
      setMessage('Booking submitted successfully!');
      setFormData({ name: '', email: '', serviceType: '', date: '' });
    } catch (err) {
      const text = err?.response?.data?.message || 'Booking submission failed.';
      setMessage(text);
    } finally {
      setSubmitting(false);
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
            <input type="text" name="name" className="form-control bg-black text-white" id="name" required value={formData.name} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-control bg-black text-white" id="email" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="serviceType" className="form-label">Service Type</label>
            <select name="serviceType" id="serviceType" className="form-select bg-black text-white" value={formData.serviceType} onChange={handleChange} required>
              <option value="">Select service</option>
              <option value="events">Event Coverage</option>
              <option value="automotive">Automotive</option>
              <option value="portraits">Portraits</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input type="date" name="date" className="form-control bg-white text-white" id="date" required value={formData.date} onChange={handleChange} />
          </div>

          <button className="btn btn-danger" type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Book Now'}</button>
        </form>
      </div>
    </>
  );
};

export default Booking;
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';


// Booking Page Component
const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Handle form submission by axios POST request by importing axios
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/bookings', formData);
    alert(res.data.message);
    setFormData({ name: '', email: '', serviceType: '', date: '' });
  } catch (err) {
    alert('Error submitting booking request');
  }
};


// Render the booking form
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Book a Consultation</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" name="name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="serviceType" className="form-label">Service Type</label>
            <select className="form-select" id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange}>
              <option value="">-- Select Service --</option>
              <option value="photo-editing">Photo Editing</option>
              <option value="video-editing">Video Editing</option>
              <option value="event-coverage">Event Coverage</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Preferred Date</label>
            <input type="date" className="form-control" id="date" name="date" required value={formData.date} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit Request</button>
        </form>
      </div>
    </>
  );
};

export default Booking;

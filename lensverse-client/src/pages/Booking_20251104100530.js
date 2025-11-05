// Booking page
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './Booking.css';

const SERVICE_OPTIONS = [
  { value: 'events', label: 'Event Coverage' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'portraits', label: 'Portraits' }
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'events',
    date: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' | 'error'
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');
    setSubmitting(true);

    try {
      // Use relative path so dev proxy works; change if your API is elsewhere
      const res = await axios.post('/api/bookings', formData, { timeout: 15000 });
      if (res.status === 200 || res.status === 201) {
        setMessage('Booking submitted successfully!');
        setMessageType('success');
        setFormData({ name: '', email: '', serviceType: 'events', date: '' });
      } else {
        setMessage('Unexpected server response. Please try again later.');
        setMessageType('error');
      }
    } catch (err) {
      const text = err?.response?.data?.message || 'Booking submission failed. Please try again.';
      setMessage(text);
      setMessageType('error');
      console.error('Booking error', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-5 bg-black text-white min-vh-100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-danger mb-3">Book a Session</h2>

            {message && (
              <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="booking-form bg-dark p-4 rounded shadow-lg">
              <div className="row row-gap">
                <div className="form-col">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-col">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-col">
                  <label htmlFor="serviceType" className="form-label">Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="form-select"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                  >
                    {SERVICE_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-col">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="booking-hint">We'll contact you to confirm availability.</small>
                  <button className="btn btn-danger" type="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Book Now'}
                  </button>
                </div>
              </div>
            </form>

            <div className="booking-note mt-3">
              No payment is taken here. We will follow up to confirm details and pricing.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
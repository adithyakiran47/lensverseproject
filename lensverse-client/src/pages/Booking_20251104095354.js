import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './Booking.css'; // optional - add this file for styles

const CATEGORY_OPTIONS = [
  { value: 'events', label: 'Event Coverage' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'portraits', label: 'Portraits' }
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  category: 'events',
  date: '',
  time: '',
  location: '',
  message: '',
  attachment: null
};

const Booking = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const validate = () => {
    const e = {};

    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.phone.trim()) e.phone = 'Phone is required';
    else if (!/^[0-9()+\-\s]{7,20}$/.test(formData.phone)) e.phone = 'Invalid phone';
    if (!formData.category) e.category = 'Select a category';
    if (!formData.date) e.date = 'Choose a date';
    else {
      const selected = new Date(`${formData.date}T${formData.time || '00:00'}`);
      const now = new Date();
      // allow same-day bookings but not past times
      if (selected < now) e.date = 'Date/time must be in the future';
    }
    if (!formData.location.trim()) e.location = 'Location is required';
    if (formData.attachment) {
      const file = formData.attachment;
      const maxMB = 5;
      if (file.size > maxMB * 1024 * 1024) e.attachment = `File must be under ${maxMB}MB`;
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setFormData(prev => ({ ...prev, attachment: file }));
    setErrors(prev => ({ ...prev, attachment: undefined }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) {
      setStatusMessage({ type: 'error', text: 'Please fix the form errors.' });
      return;
    }

    setSubmitting(true);

    try {
      // Build multipart form data so file attachments are supported.
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('category', formData.category);
      payload.append('date', formData.date);
      payload.append('time', formData.time);
      payload.append('location', formData.location);
      payload.append('message', formData.message);
      if (formData.attachment) payload.append('attachment', formData.attachment);

      // Change the URL to your server endpoint. Using relative path so dev/prod proxies work.
      const response = await axios.post('/api/bookings', payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 15000
      });

      if (response.status === 200 || response.status === 201) {
        setStatusMessage({ type: 'success', text: 'Booking submitted successfully! We will contact you soon.' });
        resetForm();
      } else {
        setStatusMessage({ type: 'error', text: 'Unexpected server response. Please try again later.' });
      }
    } catch (err) {
      console.error('Booking submit error', err);
      const errMsg = err?.response?.data?.message || 'Submission failed — please try again later.';
      setStatusMessage({ type: 'error', text: errMsg });
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

            {statusMessage && (
              <div className={`alert ${statusMessage.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {statusMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="booking-form bg-dark p-4 rounded shadow-sm">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control bg-black text-white ${errors.name ? 'is-invalid' : ''}`}
                    disabled={submitting}
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control bg-black text-white ${errors.email ? 'is-invalid' : ''}`}
                    disabled={submitting}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-control bg-black text-white ${errors.phone ? 'is-invalid' : ''}`}
                    disabled={submitting}
                    required
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`form-select bg-black text-white ${errors.category ? 'is-invalid' : ''}`}
                    disabled={submitting}
                    required
                  >
                    {CATEGORY_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Date *</label>
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`form-control bg-black text-white ${errors.date ? 'is-invalid' : ''}`}
                    disabled={submitting}
                    required
                  />
                  {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Time</label>
                  <input
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-control bg-black text-white"
                    disabled={submitting}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Location *</label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`form-control bg-black text-white ${errors.location ? 'is-invalid' : ''}`}
                    disabled={submitting}
                    required
                  />
                  {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label">Message (optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="form-control bg-black text-white"
                    disabled={submitting}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Attachment (optional, max 5MB)</label>
                  <input
                    name="attachment"
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className={`form-control bg-black text-white ${errors.attachment ? 'is-invalid' : ''}`}
                    disabled={submitting}
                  />
                  {errors.attachment && <div className="invalid-feedback">{errors.attachment}</div>}
                </div>

                <div className="col-12 d-flex justify-content-between align-items-center mt-2">
                  <small className="text-muted">We'll contact you to confirm availability.</small>
                  <button type="submit" className="btn btn-danger" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Book Now'}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 text-muted small">
              By submitting you agree to be contacted about booking details. No payment is taken here.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
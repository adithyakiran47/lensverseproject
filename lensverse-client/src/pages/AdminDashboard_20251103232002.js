import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
      return;
    }
    fetchBookings();
  }, [navigate]);

  const fetchBookings = async () => {
    const token = localStorage.getItem('adminToken');
    try {
      const res = await axios.get('http://localhost:5000/api/bookings', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
    } catch (err) {
      alert('Session expired or unauthorized. Please login again.');
      localStorage.removeItem('adminToken');
      navigate('/admin-login');
    }
  };

  const updateBookingStatus = async (id, newStatus) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.put(`http://localhost:5000/api/bookings/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBookings();
    } catch (err) {
      alert('Failed to update booking');
    }
  };

  const deleteBooking = async (id) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBookings();
    } catch (err) {
      alert('Failed to delete booking');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Admin Dashboard</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking._id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.serviceType}</td>
                <td>{booking.date}</td>
                <td>{booking.status || 'pending'}</td>
                <td>
                  <button onClick={() => updateBookingStatus(booking._id, 'confirmed')} className="btn btn-success btn-sm me-2">Confirm</button>
                  <button onClick={() => updateBookingStatus(booking._id, 'cancelled')} className="btn btn-warning btn-sm me-2">Cancel</button>
                  <button onClick={() => deleteBooking(booking._id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;

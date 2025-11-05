import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const fetchBookings = async () => {
    const token = localStorage.getItem('adminToken');
    try {
      const res = await axios.get('http://localhost:5000/api/bookings', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
    } catch {
      alert('Session expired. Please login again.');
      localStorage.removeItem('adminToken');
      navigate('/admin-login');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
    } else {
      fetchBookings();
    }
  }, [navigate]);

  const updateBookingStatus = async (id, status) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.put(`http://localhost:5000/api/bookings/${id}`, { status }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBookings();
    } catch {
      alert('Failed to update booking');
    }
  };

  const deleteBooking = async (id) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBookings();
    } catch {
      alert('Failed to delete booking');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container bg-black text-white min-vh-100 py-4">
        <h2 className="text-danger mb-4">Admin Dashboard</h2>
        <table className="table table-dark table-hover text-white">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Service</th><th>Date</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b._id}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.serviceType}</td>
                <td>{b.date}</td>
                <td>{b.status || 'pending'}</td>
                <td>
                  <button onClick={() => updateBookingStatus(b._id, 'confirmed')} className="btn btn-success btn-sm me-2">Confirm</button>
                  <button onClick={() => updateBookingStatus(b._id, 'cancelled')} className="btn btn-warning btn-sm me-2">Cancel</button>
                  <button onClick={() => deleteBooking(b._id)} className="btn btn-danger btn-sm">Delete</button>
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

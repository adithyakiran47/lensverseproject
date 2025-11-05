import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const token = localStorage.getItem('adminToken');
    try {
      const res = await axios.get('http://localhost:5000/api/bookings', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
    } catch {
      alert('Session expired. Please log in again.');
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
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBookings();
    } catch {
      alert('Update failed.');
    }
  };

  const deleteBooking = async (id) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBookings();
    } catch {
      alert('Delete failed.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container bg-black text-white py-4 min-vh-100">
        <h2 className="text-danger mb-4">Admin Dashboard</h2>
        <table className="table table-dark table-hover">
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
                  <button className="btn btn-success btn-sm me-2" onClick={() => updateBookingStatus(b._id, 'confirmed')}>Confirm</button>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => updateBookingStatus(b._id, 'cancelled')}>Cancel</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteBooking(b._id)}>Delete</button>
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

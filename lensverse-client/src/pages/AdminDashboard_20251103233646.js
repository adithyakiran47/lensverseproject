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

  const updateBookingStatus = async (id, newStatus) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.put(`http://localhost:5000/api/bookings/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
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
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBookings();
    } catch {
      alert('Failed to delete booking');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-black text-white">
        <h2 className="text-3xl mb-6 text-red-600 font-bold">Admin Dashboard</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-red-600">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Service</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking._id} className="border-b border-gray-700 hover:bg-gray-800 transition">
                <td className="py-2 px-4">{booking.name}</td>
                <td className="py-2 px-4">{booking.email}</td>
                <td className="py-2 px-4">{booking.serviceType}</td>
                <td className="py-2 px-4">{booking.date}</td>
                <td className="py-2 px-4 text-red-500">{booking.status || 'pending'}</td>
                <td className="py-2 px-4 space-x-2">
                  <button
                    onClick={() => updateBookingStatus(booking._id, 'confirmed')}
                    className="bg-green-600 hover:bg-green-700 text-black px-3 py-1 rounded transition"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => updateBookingStatus(booking._id, 'cancelled')}
                    className="bg-yellow-600 hover:bg-yellow-700 text-black px-3 py-1 rounded transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => deleteBooking(booking._id)}
                    className="bg-red-600 hover:bg-red-700 text-black px-3 py-1 rounded transition"
                  >
                    Delete
                  </button>
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

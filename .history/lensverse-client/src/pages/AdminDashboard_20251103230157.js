import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await axios.get('http://localhost:5000/api/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data);
      } catch (err) {
        alert('Failed to fetch bookings. Please login again.');
        // Optional: Redirect to login page
        window.location.href = '/admin-login';
      }
    };
    fetchBookings();
  }, []);

  const handleLogout = () => {
  localStorage.removeItem('adminToken');
  window.location.href = '/admin-login'; // redirect to login page after logout
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
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.serviceType}</td>
                <td>{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;

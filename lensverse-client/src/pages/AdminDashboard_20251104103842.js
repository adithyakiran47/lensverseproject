// src/pages/AdminDashboard.js
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Navbar from '../components/Navbar';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const STATUS_BADGE = { pending: 'secondary', confirmed: 'success', cancelled: 'warning' };

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const fetchBookings = useCallback(async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
      return;
    }
    setLoading(true);
    try {
      const res = await api.get('/bookings', { headers: { Authorization: `Bearer ${token}` } });
      setBookings(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error('fetchBookings error', err);
      localStorage.removeItem('adminToken');
      navigate('/admin-login');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => { fetchBookings(); }, [fetchBookings]);

  const showMessage = (type, text, ms = 4000) => {
    setStatusMessage({ type, text });
    setTimeout(() => setStatusMessage(null), ms);
  };

  const updateBookingStatus = async (id, status) => {
    const token = localStorage.getItem('adminToken');
    try {
      await api.put(`/bookings/${id}`, { status }, { headers: { Authorization: `Bearer ${token}` } });
      showMessage('success', `Booking marked ${status}`);
      fetchBookings();
    } catch (err) {
      console.error('updateBookingStatus', err);
      showMessage('error', 'Failed to update booking');
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm('Delete this booking? This action cannot be undone.')) return;
    const token = localStorage.getItem('adminToken');
    try {
      await api.delete(`/bookings/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      showMessage('success', 'Booking deleted');
      fetchBookings();
    } catch (err) {
      console.error('deleteBooking', err);
      showMessage('error', 'Failed to delete booking');
    }
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return bookings.filter(b => {
      if (statusFilter !== 'all' && (b.status || 'pending') !== statusFilter) return false;
      if (!q) return true;
      const hay = [b.name, b.email, b.serviceType, b.location, b.message].filter(Boolean).join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [bookings, search, statusFilter]);

  const formatDate = (d) => {
    if (!d) return '-';
    const date = new Date(d);
    if (isNaN(date)) return d;
    return date.toLocaleString();
  };

  return (
    <>
      <Navbar />
      <div className="container bg-black text-white py-5 min-vh-100">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-danger mb-0">Admin Dashboard</h2>
          <div className="d-flex gap-2 align-items-center">
            <input className="form-control form-control-sm bg-dark text-white" style={{ minWidth: 220 }} placeholder="Search by name, email, service..." value={search} onChange={e => setSearch(e.target.value)} />
            <select className="form-select form-select-sm bg-dark text-white" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} aria-label="Filter by status">
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button className="btn btn-outline-danger btn-sm" onClick={fetchBookings} disabled={loading}>
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>

        {statusMessage && <div className={`alert ${statusMessage.type === 'success' ? 'alert-success' : 'alert-danger'}`}>{statusMessage.text}</div>}

        <div className="table-responsive d-none d-md-block">
          <table className="table table-dark table-hover align-middle">
            <thead><tr><th>Name</th><th>Email</th><th>Service</th><th>Date</th><th>Status</th><th style={{ width: 260 }}>Actions</th></tr></thead>
            <tbody>
              {filtered.map(b => (
                <tr key={b._id}>
                  <td style={{ minWidth: 160 }}>{b.name}</td>
                  <td style={{ minWidth: 200 }}>{b.email}</td>
                  <td>{b.serviceType}</td>
                  <td>{formatDate(b.date)}</td>
                  <td><span className={`badge bg-${STATUS_BADGE[(b.status || 'pending')] || 'secondary'}`}>{b.status || 'pending'}</span></td>
                  <td>
                    <div className="d-flex gap-2 flex-wrap">
                      <button className="btn btn-sm btn-success" onClick={() => updateBookingStatus(b._id, 'confirmed')}>Confirm</button>
                      <button className="btn btn-sm btn-warning" onClick={() => updateBookingStatus(b._id, 'cancelled')}>Cancel</button>
                      <button className="btn btn-sm btn-outline-light" onClick={() => { navigator.clipboard?.writeText(JSON.stringify(b)); showMessage('success','Copied booking to clipboard'); }}>Copy</button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteBooking(b._1d)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan="6" className="text-muted text-center">No bookings found.</td></tr>}
            </tbody>
          </table>
        </div>

        <div className="d-md-none">
          {filtered.map(b => (
            <div key={b._id} className="card bg-dark mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div><h5 className="card-title mb-1">{b.name}</h5><div className="text-muted small">{b.email}</div></div>
                  <span className={`badge bg-${STATUS_BADGE[(b.status || 'pending')] || 'secondary'}`}>{b.status || 'pending'}</span>
                </div>
                <p className="mb-1"><strong>Service:</strong> {b.serviceType}</p>
                <p className="mb-2"><strong>Date:</strong> {formatDate(b.date)}</p>
                <div className="d-flex gap-2 flex-wrap">
                  <button className="btn btn-sm btn-success" onClick={() => updateBookingStatus(b._id, 'confirmed')}>Confirm</button>
                  <button className="btn btn-sm btn-warning" onClick={() => updateBookingStatus(b._id, 'cancelled')}>Cancel</button>
                  <button className="btn btn-sm btn-outline-light" onClick={() => { navigator.clipboard?.writeText(JSON.stringify(b)); showMessage('success','Copied booking'); }}>Copy</button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteBooking(b._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="text-muted text-center py-4">No bookings found.</div>}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
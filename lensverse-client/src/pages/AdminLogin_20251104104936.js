// src/pages/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import './AdminLogin.css';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username.trim() || !formData.password) {
      setError('Please enter both username and password.');
      return;
    }

    setSubmitting(true);
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', formData);
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      const msg = err?.response?.data?.message || 'Invalid credentials';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-wrap">
        <div className="brand"><span className="brand-red">Lens</span><span className="brand-white">Verse</span></div>

        <form className="admin-card" onSubmit={handleSubmit}>
          <h2 className="card-title">Admin Login</h2>

          {error && <div className="alert alert-danger">{error}</div>}

          <label className="form-label" htmlFor="username">Username</label>
          <input id="username" name="username" type="text" className="form-control"
            placeholder="admin" value={formData.username} onChange={handleChange} disabled={submitting} required />

          <label className="form-label mt-2" htmlFor="password">Password</label>
          <div className="password-row">
            <input id="password" name="password" type={showPass ? 'text' : 'password'} className="form-control"
              placeholder="••••••••" value={formData.password} onChange={handleChange} disabled={submitting} required />
            <button type="button" className="show-btn" onClick={() => setShowPass(s => !s)}>{showPass ? 'Hide' : 'Show'}</button>
          </div>

          <button className="btn-submit" type="submit" disabled={submitting}>
            {submitting ? 'Signing in...' : 'Login'}
          </button>

          <div className="small-note">By logging in you accept admin access rules.</div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
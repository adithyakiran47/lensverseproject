import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';  // If you have any css for login

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', formData);
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin-dashboard');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container bg-black text-white d-flex justify-content-center align-items-center vh-100">
      <form className="login-form bg-danger p-4 rounded shadow" style={{ maxWidth: "350px" }} onSubmit={handleSubmit}>
        <h2 className="text-center text-black mb-4">Admin Login</h2>
        <input type="text" name="username" className="form-control mb-3" placeholder="Username" required onChange={handleChange} value={formData.username} />
        <input type="password" name="password" className="form-control mb-3" placeholder="Password" required onChange={handleChange} value={formData.password} />
        <button type="submit" className="btn btn-black w-100">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;

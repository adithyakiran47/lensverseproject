// src/utils/api.js
import axios from 'axios';

const base = process.env.REACT_APP_API_BASE || '/api';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  timeout: 15000,
  headers: {
    Accept: 'application/json'
  }
});

export default api;
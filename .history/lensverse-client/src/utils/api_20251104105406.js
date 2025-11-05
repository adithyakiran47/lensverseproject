// src/utils/api.js
// Small axios instance. Uses REACT_APP_API_BASE if set, otherwise defaults to relative '/api'.
import axios from 'axios';

const base = process.env.REACT_APP_API_BASE || '/api';

const api = axios.create({
  baseURL: base,
  timeout: 15000,
  headers: {
    'Accept': 'application/json'
  }
});

export default api;
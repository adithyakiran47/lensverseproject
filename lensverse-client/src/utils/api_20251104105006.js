import axios from 'axios';
const base = process.env.REACT_APP_API_BASE || '/api';
export default axios.create({ baseURL: base, timeout: 15000 });
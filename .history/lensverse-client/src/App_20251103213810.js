import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setMessage(res.data))
      .catch(err => setMessage('Error fetching message'));
  }, []);

  return (
    <div className="container mt-5">
      <h1>{message}</h1>
    </div>
  );
}

export default App;

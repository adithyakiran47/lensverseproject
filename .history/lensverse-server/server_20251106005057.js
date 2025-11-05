const express = require('express');
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

require('dotenv').config();

const Booking = require('./models/Booking');
const Admin = require('./models/Admin');
const authMiddleware = require('./middleware/auth');

const app = express();
console.log('CORS origin:', process.env.FRONTEND_URL); 
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));


app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt for:', username);
  const admin = await Admin.findOne({ username });
  console.log('Admin found:', admin);

  if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

  const match = await bcrypt.compare(password, admin.password);
  console.log('Password match:', match);

  if (!match) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});


app.get('/api/bookings', authMiddleware, async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

app.post('/api/bookings', async (req, res) => {
  const { name, email, serviceType, date } = req.body;
  if (!name || !email || !serviceType || !date) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }
  try {
    const newBooking = new Booking({ name, email, serviceType, date });
    await newBooking.save();
    res.status(201).json({ message: 'Booking request saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update booking status
app.put('/api/bookings/:id', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body; // expected "confirmed" or "cancelled"
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete booking
app.delete('/api/bookings/:id', authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

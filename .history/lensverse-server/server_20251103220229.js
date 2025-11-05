const express = require('express');
const cors = require('cors');
const app = express();
// MongoDB connection
const mongoose = require('mongoose');
require('dotenv').config();
const Booking = require('./models/Booking');

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server is running');
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));


// Booking API endpoint
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

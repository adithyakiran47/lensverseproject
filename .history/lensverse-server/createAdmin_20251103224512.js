const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');
require('dotenv').config();

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  const username = 'admin'; // change as needed
  const password = 'your_secure_password'; // change as needed

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = new Admin({ username, password: hashedPassword });

  await admin.save();
  console.log('Admin created');

  await mongoose.disconnect();
}

createAdmin().catch(console.error);

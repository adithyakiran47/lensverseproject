// lensverse-server/createAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const Admin = require('./models/Admin');

const [,, username, password] = process.argv;

if (!username || !password) {
  console.error('Usage: node createAdmin.js <username> <password>');
  process.exit(1);
}

async function run() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const hashed = await bcrypt.hash(password, 10);
  const existing = await Admin.findOne({ username });
  if (existing) {
    existing.password = hashed;
    await existing.save();
    console.log('Updated password for admin:', username);
  } else {
    const admin = new Admin({ username, password: hashed });
    await admin.save();
    console.log('Created admin:', username);
  }
  await mongoose.disconnect();
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });
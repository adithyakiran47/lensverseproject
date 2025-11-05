const bcrypt = require('bcryptjs');

async function hashPassword(plainTextPassword) {
  const hashed = await bcrypt.hash(plainTextPassword, 10);
  console.log(hashed);
}

hashPassword('your_admin_password');

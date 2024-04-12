const bcrypt = require('bcrypt');
const userModel = require('../models/user');

async function signUp(req, res) {
  const { name, email, phoneNumber, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into database
    await userModel.createUser(name, email, phoneNumber, hashedPassword);
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { signUp };

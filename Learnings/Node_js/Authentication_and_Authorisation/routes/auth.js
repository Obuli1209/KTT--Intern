const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const auth = require('../middleware/auth');
require('dotenv').config();

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;

  const existing = await User.findOne({ where: { email } });
  if (existing) return res.status(400).json({ message: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, email, password: hashed, role });
  res.status(201).json({ message: 'User registered', user: newUser });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
  res.json({ message: 'Login successful', token });
});

// Protected Route (for all logged in users)
router.get('/profile', auth(), async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    attributes: ['id', 'username', 'email', 'role']
  });
  res.json(user);
});

// Admin Only Route
router.get('/admin', auth(['admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

module.exports = router;

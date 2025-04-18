const express = require('express');
const app = express();
const PORT = 3000;

let users = [
  { id: 1, name: 'Maadhini' },
  { id: 2, name: 'Obuli' }
];

app.use(express.json()); // Middleware to handle JSON

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET a single user
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.json(user || { message: 'User not found' });
});

// POST create new user
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: 'User deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

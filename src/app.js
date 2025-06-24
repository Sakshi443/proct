// src/app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use(express.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Landing page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});
// // Example route (optional)
// app.get('/', (req, res) => {
//   res.send('API is running 🚀');
// });

module.exports = app;

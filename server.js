'use strict';

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/healthhub', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Could not connect to database:', err));

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to HealthHub+ API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
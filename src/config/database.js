'use strict';

const { Sequelize } = require('sequelize');

// PostgreSQL database configuration for HealthHub+
const sequelize = new Sequelize('HealthHubDB', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set to console.log to see the raw SQL queries
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

// server.js
 
const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3001;
 
// Create a PostgreSQL client
const client = new Client({
  user: 'postgres',
  host: 'ec2-13-235-81-170.ap-south-1.compute.amazonaws.com',
  database: 'postgres',
  password: 'Cream#1122',
  port: '5432',
});
 
// Connect to the PostgreSQL server
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err));
 
// Example endpoint to fetch user data
app.get('/users', (req, res) => {
  client.query('SELECT * FROM "User".user_profile_picture')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json({ error: err.message }));
});
 
// Close the connection when the server shuts down
process.on('SIGINT', () => {
  client.end()
    .then(() => {
      console.log('Connection to PostgreSQL closed');
      process.exit(0);
    })
    .catch(err => console.error('Error closing connection', err));
});
 
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
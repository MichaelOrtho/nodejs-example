// Pull http module
const http = require('http');

// Pull express
const express = require('express');

// Instantiate
const app = express();

// Add mocked user
const user = require('./routes/user');
app.use(user);

// Add Route
const home = require('./routes/home');
app.use('/home', home);

// Add 404 Route
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Create server object
const server = http.createServer(app);

// Start listening
server.listen(3001);


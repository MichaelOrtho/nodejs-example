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

// Start server listening on port 3001
server.listen(3001, () => {
  console.log('NodeJS is listening on port %s', server.address().port);
});


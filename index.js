// Pull http module
const http = require('http');

// Pull express
const express = require('express');

// Instantiate
const app = express();

// Set PUG as default view engine
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Add Read JSON Body Middleware
app.use(express.json());

// Add mocked user
const user = require('./routes/user');
app.use(user);

// Add View rendering
const indexRouter = require('./routes/index');
app.use(indexRouter);

// Add Addresses CRUD
const addressesRouter = require('./routes/addresses');
app.use(addressesRouter);

// Host static files
app.use('/', express.static(__dirname + '/public'));

// Add 404 Route
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Add error route
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

// Create server object
const server = http.createServer(app);

// Start listening
server.listen(3001, (err) => {
  console.log('Listening at port 3001');
});

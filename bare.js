// Pull html module
const http = require('http');

// Create server object
const server = http.createServer((req, res, next) => {
  // Return OK
  res.write('Hello World!');

  // Finish request
  res.end();
});

// Start server listening on port 3001
server.listen(3001, () => {
  console.log('NodeJS is listening on port %s', server.address().port);
});
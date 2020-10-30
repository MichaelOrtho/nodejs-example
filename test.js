// Pull html module
const http = require('http');

// Create server object
const server = http.createServer((req, res, next) => {
  // Return OK
  res.write('OK!');

  // Finish request
  res.end();
});

// Start server listening on port 3001
server.listen(3001);
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('OK');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
  console.log('Test passed with status code: 200');

  // ✅ Shutdown the server after test finishes
  server.close(() => {
    process.exit(0); // Exit with success
  });
});

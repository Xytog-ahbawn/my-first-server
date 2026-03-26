const http = require('http');

const server = http.createServer((req, res) => {
  // This code runs every time someone visits your server
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Termux! My Node.js server is running.\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is live and listening on http://localhost:${PORT}`);
});


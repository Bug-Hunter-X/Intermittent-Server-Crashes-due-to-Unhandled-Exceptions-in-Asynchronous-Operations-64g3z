```javascript
const http = require('http');

const requestListener = (request, response) => {
  try {
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080);

console.log('Server is running at http://localhost:8080');

process.on('uncaughtException', (err) => {
  console.error('Unhandled exception:', err);
  // Consider more sophisticated error handling, e.g., logging, restarting the server
});
```
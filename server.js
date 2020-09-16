
const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '139.162.153.214';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.createReadStream('index.html').pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

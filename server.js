

const fs = require('fs');
const http = require('http');
const url = require('url');



const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/') {

    fs.readFile('./index.html', 'utf-8', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  }

  // if (pathName === '/price-promise') {

  //   fs.readFile('./price-promise.js', function (err, data) {
  //     if (err) console.log(err);
  //     res.writeHead(200, {'Content-Type': 'text/javascript'});
  //     res.write(data);
  //     res.end();
  //   });

  // }

  // if (pathName === '/') {

  //   fs.readFile('./css/style.css', function (err, data) {
  //     if (err) console.log(err);
  //     res.writeHead(200, {'Content-Type': 'text/css'});
  //     res.write(data);
  //     res.end();
  //   });

  // }


});

server.listen(3000, '139.162.153.214', () => {
  console.log('Listening to requets on port 3000');
});


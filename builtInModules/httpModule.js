const httpModule = require('http');

const server = httpModule.createServer((req, res) => {
  //   console.log(req);
  if (req.url === '/') {
    res.end('Home Page');
  }
  if (req.url === '/about') {
    res.end('About Page');
  }

  res.end(`<h2>404 Error</h2>`);
});

server.listen(5000);

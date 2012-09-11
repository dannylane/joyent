var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Danny\'s Hello World server in node.js. testing again.\n');
}).listen(80, "dannylane.no.de");
console.log('Server running at http://localhost:80');
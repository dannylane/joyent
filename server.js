var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Danny\'s Hello World server in node.js \n');
}).listen(81, "localhost");
console.log('Server running at http://localhost:80');
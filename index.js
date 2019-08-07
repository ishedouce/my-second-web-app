var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end('<h1> my name is la douce</h1> ');
}).listen(1101);
console.log("I'm running on port "+1101);
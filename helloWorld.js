let http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello ishema');
}).listen(3000);
console.log('server stated at 3000');
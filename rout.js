let http = require('http');

http.createServer(function(req, res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('home pagen us');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'plain/text'});
            res.end('about us');
            break;

        default:
            res.writeHead(404, {'Content-Type': 'plain/text'});
            res.end('Not Found');

    }
}).listen(3000);
console.log('server started at 3000');

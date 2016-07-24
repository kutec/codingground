 var http = require('http');

var requesrHandler = function(req, res){
    res.writeHead(200, {
        'content-Type': 'text/plain'
    });
    res.end('Welcome...');
};

var server = http.createServer(requesrHandler);

server.listen(3000, 'localhost');
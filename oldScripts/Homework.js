var eq = "2+ 6 / 3+2+ 6 / 3+2+ 6 / 3";


function log(msg) {
    console.log(msg);
}

console.log(eval(eq));


var http = require('http');


http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
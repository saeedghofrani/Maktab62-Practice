const http = require('http');
const port = 5000;

http.createServer(function (req, res) {  

    console.log(req.url);
    console.log(req.method);
    if (req.url === '/hello' || req.method === 'GET') 
        res.end('hello body');
}).listen(port);

console.log('port' + `${port}`);
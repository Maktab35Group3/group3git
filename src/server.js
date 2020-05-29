const http = require('http');

http.createServer(function (req, res)
{
    if (req.url === '/') {
        res.end("Hello World");
    }
    else {
        res.end("<h1>404</h1><h3>Not Found</h3>");
    }
}).listen(3000);
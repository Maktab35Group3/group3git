//load requirements
const http = require('http');
const data = require('../data/json.json');

//config server
http.createServer(function (req, res) {
    if (req.url === '/') {
        res.end("Hello World");
    }
    //root-route configed

    else if (req.url === '/api') {
        res.end(JSON.stringify(data));
    }
    //api-route configed

    else {
        res.end("<h1>404</h1><h3>Not Found</h3>");
    }
    //404-page configed
}).listen(3000, () => console.log("Server is up on http://localhost:3000"));
//load requirements
const http = require('http');
const data = require('../data/json.json');
const fs = require('fs');
const path = require('path');

//config server
http.createServer(function (req, res) {
    console.log(req.url);
    //show url on back-end Terminal
    if (req.url === '/') {
        res.end("Hello World");
    }
    //root-route configed
    else if (req.url === '/home') {
        res.end("We are in Home page");
    }
    //Home-page
    else if (req.url === '/api') {
        res.end(JSON.stringify(data));
    }
    //api-route configed
    else if (req.url === '/about') {
        res.end("About me");
    }
    //About-page
    else if (req.url === '/contact') {
        res.end("contact with us");
    }
    //Contact-page
    else if (req.url === '/hello') {
        fs.readFile(path.join(__dirname, "../public/hello.html"), (err, file) => {
            if (err) return console.log("Unable to read hello.html");
            res.end(file.toString());
        });
        //read hello.html
    }
    //hello-page
    else if(req.url==='/style.css'){
        fs.readFile(path.join(__dirname, "../public/style/style.css"), (err, file) => {
            if (err) return console.log("Unable to read style.css");
            res.end(file.toString());
        });
        //read style.css
    }
    //style-render
    else if(req.url==='/g3.png'){
        fs.readFile(path.join(__dirname, "../public/img/g3.png"), (err, file) => {
            if (err) return console.log("Unable to read g3.png");
            res.end(file);
        });
        //read g3.png
    }
    //image-render
    else {
        res.end("<h1>404</h1><h3>Not Found</h3>");
    }
    //404-page configed
}).listen(4000, () => console.log("Server is up on http://localhost:4000"));
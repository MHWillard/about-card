const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { //use http createServer command object
    res.StatusCode = 200; //send status code as response
    res.setHeader('Content-Type','text/plain');
    res.end('Jello World');
});

server.listen(port, hostname, () => {
    console.log(`running hostname ${hostname} on port ${port}`);
});
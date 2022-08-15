const data = require('./data');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type' : 'application/json'})
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(8000);
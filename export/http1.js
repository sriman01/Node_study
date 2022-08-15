const http = require('http');

// http.createServer((req, res) => {
//     res.write("hello from server");
//     res.end();
// }).listen(4500);

/* -------------------------------------------------------------- */

const server = http.createServer((req, res) => {

    res.write("hello bro, How are you?");
    res.end();

});

server.listen(4500, '127.0.0.1', () => {
    console.log('listenning on port 4500')
})

/*-------------------------------------------------------------------*/

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//       data: 'Hello World!'
//     }));
//   });
  
//   server.listen(8000);

/*-------------------------------------------------*/
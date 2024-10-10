console.log("Hello World")
const http = require('http');

const server = http.createServer((req, res) => {
 
  res.write('Hello Node !!!!');
  res.end()
});

server.listen(3000, (err) => {
 err?console.log(err): console.log('Server running at http://localhost:3000/');
});
1

import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Leaf World\n');
}).listen(2303, '127.0.0.1');

console.log('Server running at http://127.0.0.1:2303/');
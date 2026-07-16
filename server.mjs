import http from 'node:http';

http.createServer((request, response) => {
    response.end('Hello Client!');
}).listen(3000);

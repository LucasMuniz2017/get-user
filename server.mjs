import http from 'node:http';

const users = [{
    name: 'Alex Bessa',
    age: 30,
    status: true
}, {
    name: 'Valdiana Bessa',
    age: 31,
    status: true
}, {
    name: 'Ana Bessa',
    age: 0,
    status: false
}];

http.createServer((request, response) => {
    if (request.url === '/users') {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end(JSON.stringify(users));
    } else {
        response.writeHead(404, { 'content-type': 'application/json' });
        response.end(JSON.stringify({ message: 'Página não encontrada.' }));
    }
}).listen(3000);
    
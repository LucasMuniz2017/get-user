import http from 'node:http';
import routerUser from './routers/user.router.js';

http.createServer((request, response) => {
    if (request.url === '/users') return routerUser(request, response);

    response.writeHead(404, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ message: 'Página não encontrada.' }));
}).listen(3000);

import { findAllUsers } from '../services/user.service.js';

export function getAllUsers(response) {
    const users = findAllUsers();

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(users));
}

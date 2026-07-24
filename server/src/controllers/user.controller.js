import { findAllUsers } from '../services/user.service.js';

export function getAllUsers(response) {
    const users = findAllUsers();

    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(users));
}

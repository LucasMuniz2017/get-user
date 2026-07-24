import { getAllUsers } from '../controllers/user.controller.js'

export default function routerUser(request, response) {
    if (request.method === 'GET') return getAllUsers(response);
}

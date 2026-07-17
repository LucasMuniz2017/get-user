const resource = 'users';

async function getUsers() {
    const response = await fetch(`http://localhost:3000/${resource}`);

    const data = await response.json();

    console.log(data);
}

getUsers();

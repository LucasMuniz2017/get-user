const button = document.querySelector('button');
const input = document.querySelector('input');
const result = document.querySelector('p')

const resource = 'users';

async function getUsers() {
    const id = Number(input.value);

    const response = await fetch(`http://localhost:3000/${resource}`);

    const data = await response.json();

    const user = data.find(user => user.id === id);

    if (!user) {
        result.textContent = `Usuário de id ${id} não encontrado.`;
        console.log(`Usuário de id ${id} não encontrado.`);
        return;
    }

    result.textContent = `id de usuário: ${user.id} Nome: ${user.name} Idade: ${user.age} Status de usuário: ${user.status}`
    console.log(user);
    
}

button.addEventListener('click', getUsers);

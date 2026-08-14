const button = document.querySelector('button')
const title = document.querySelector('h1');

button.addEventListener('click', () => {
    const value = confirm('Deseja realmente sair?');

    if (!value) return;

    button.style.display = 'none';
    title.textContent = 'Saindo.'

    setTimeout(() => {
        title.textContent = 'Saindo..'
    }, 1000)

    setTimeout(() => {
        title.textContent = 'Saindo...'
    }, 2000)

    setTimeout(() => {
        window.location.href = './login.html'
    }, 3000)

})
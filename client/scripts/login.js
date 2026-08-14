const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const checkbox = document.querySelector('input[type="checkbox"]')
const button = document.querySelector('button');
const labelPassword = document.querySelector('#label-password');


button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    if (!emailValue || !passwordValue) {
        alert('Preencha todos os campos.')
        return;
    }

    if (
        emailValue !== sessionStorage.getItem('email') ||
        passwordValue !== sessionStorage.getItem('password')) {
        alert('E-mail e/ou senha incorreto.');
        return;
    }

    alert('Acesso permitido.')

});

checkbox.addEventListener('change', () => {
    const attributeValue = password.getAttribute('type');

    if (attributeValue === 'password') {
        return password.setAttribute('type', 'text')
        labelPassword.textContent = 'Ocultar Senha'
    }

    password.setAttribute('type', 'password')
    labelPassword.textContent = 'Mostrar Senha';
})
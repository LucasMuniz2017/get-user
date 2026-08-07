const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');


button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    if (!emailValue || !passwordValue) {
        alert('Preencha todos os campos.')
        return;
    }

    sessionStorage.setItem('email', emailValue);
    sessionStorage.setItem('password', passwordValue);

    alert('Usuário registrado com sucesso.')
    
window.location.href = './login.html';

});
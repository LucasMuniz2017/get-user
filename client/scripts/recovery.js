const email = document.querySelector('input[type="email"]');
const newPassword = document.querySelector('#new-password');
const confirmNewPassword = document.querySelector('#confirm-new-password');
const button = document.querySelector('button');
const checkbox = document.querySelector('input[type="checkbox"]')
const abelPassword = document.querySelector('#labelPassword')

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const newPasswordValue = newPassword.value;
    const confirmNewPasswordValue = confirmNewPassword.value;


    if (!emailValue || !newPasswordValue || !confirmNewPasswordValue)
        return alert('Preencha todos os campos');

    if (emailValue !== sessionStorage.getItem('email'))
        return alert('Email não registrado.');

    if (newPasswordValue !== confirmNewPasswordValue)
        return alert('As senhas não coincidem. Tente novamente')


    sessionStorage.setItem('password', newPasswordValue);
    alert('Senha atualizada com sucesso!');

    window.location.href = './login.html';
});

checkbox.addEventListener('change', () => {
    const newAttributeValue = newPassword.getAttribute('type');
    const confirmAttributeValue = confirmNewPassword.getAttribute('type');

    if (newAttributeValue === "password") {
        newPassword.setAttribute('type', 'text')
        confirmNewPassword.setAttribute('type', 'text')
        return labelPassword.textContent = "Ocultar senha"
    }

    newPassword.setAttribute('type', 'password')
    confirmNewPassword.setAttribute('type', 'password')
    labelPassword.textContent = "Mostrar Senha"


})
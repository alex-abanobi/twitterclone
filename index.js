let signInButton = document.querySelector('#signup-login-button');
const q = str => document.querySelector(str);
let loginDivContainer = q('#login-div-container');
let loginForm = q('.login-form');


signInButton.addEventListener('click', () => {

    loginDivContainer.style.filter = 'blur(10px)';
    loginForm.classList.add('show-login-form');
    // loginForm.style.display = 'flex';


})
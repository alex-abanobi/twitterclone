let signInButton = document.querySelector('#signup-login-button');
const find = str => document.querySelector(str);
let loginDivContainer = find('#login-div-container');
let loginForm = find('.login-form');
let body = document.querySelector('body');


let tweetText = find('#tweet-text');

signInButton.addEventListener('click', () => {

    loginDivContainer.style.filter = 'blur(10px)';
    loginForm.classList.add('show-login-form');
    // loginForm.style.display = 'flex';


})
const container = document.querySelector('.box');
const signInButton = document.querySelector('#sign-in-button');
const signUpButton = document.querySelector('#sign-up-button');

signUpButton.addEventListener('click', () => container.classList.add
('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove
('right-panel-active'));
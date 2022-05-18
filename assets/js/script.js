let logIn = document.getElementById('login');
let signUp = document.getElementById('signup')
let button = document.getElementById('btn');

function signup () {
    login.style.left = '-300px';
    signUp.style.left = '50px';
    button.style.left = '90px';
}

function login () {
    login.style.left = '50px';
    signUp.style.left = '350px';
    button.style.left = '0px';
}
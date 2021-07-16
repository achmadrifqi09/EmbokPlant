const navToggle = document.querySelector('.container #nav-toggle');
const content = document.querySelector('body #content');
const navbar = document.querySelector('body nav');

navToggle.addEventListener('click', function () {
    content.classList.toggle('low-bg');
    navbar.classList.toggle('shadow-lg');
});
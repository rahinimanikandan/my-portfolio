const btn = document.querySelector('.btn');
const navbar = document.querySelector('.nav-bar');
const body = document.body;

btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    body.classList.toggle('menu-open');
});

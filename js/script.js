const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
const mobileMenu = document.querySelector('.menu');
const mobileMenuCloseBtn=document.querySelector('.close');


mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-active');
    mobileMenuCloseBtn.classList.add('is-active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
});

mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
    mobileMenuCloseBtn.classList.remove('is-active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
});
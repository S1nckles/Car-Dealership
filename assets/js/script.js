const body = document.querySelector('body');
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
headerBurger.addEventListener('click', function(e) {
    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
});
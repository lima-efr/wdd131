const hamburgerButton = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.nav-menu');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

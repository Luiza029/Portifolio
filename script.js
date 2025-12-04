let menuicone = document.querySelector('#icone-menu');
let navbar = document.querySelector('.navbar');

menuicone.addEventListener('click', () => {
    menuicone.classList.toggle('bx-x');
    navbar.classList.toggle('ativo');
});

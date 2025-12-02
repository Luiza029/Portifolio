let menuicone = document.querySelector('#icone-menu');
let navbar = document.querySelector('.navbar');

menuicone.click = () => {
    menuicone.classList.toggle('bx-x');
    navbar.classList.toggle('ativo');
}

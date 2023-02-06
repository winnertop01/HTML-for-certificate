function imgChange(items) {
    document.querySelector('.home-img img').src = items;
}
function bgChange(color, txtcolor) {
    document.querySelector('.home').style.background = color;
    document.querySelector('.home-text h1').style.color = txtcolor;
}
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
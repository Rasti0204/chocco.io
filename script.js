const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const body = document.body;

const links = document.querySelector('.menu__link__hamburger');


links.forEach(function(element){
    element.addEventListener('click' , toggleMenu);
  })

function toggleMenu() {
    hamburger.classList.toggle('hamburger--active');
    overlay.classList.toggle('overlay--active');
    body.classList.toggle('body--active--menu');
}

hamburger.addEventListener('click', toggleMenu);
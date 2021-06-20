'use strict';
const header = document.querySelector('.header');
window.addEventListener('scroll', stickHeader);



// Creating a sticky header 

function stickHeader() {
    if (window.scrollY > header.offsetHeight + 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}
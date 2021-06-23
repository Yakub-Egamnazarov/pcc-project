'use strict';

// variables and constants for the Header 
const header = document.querySelector('.header');
window.addEventListener('scroll', stickHeader);

// variables and constants for the Hero section 
const heroSlides = document.querySelectorAll('.hero__slide');
const heroLinks = document.querySelectorAll('.hero__link')


// Creating a sticky header 

function stickHeader() {
    if (window.scrollY > header.offsetHeight + 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}


// Animation effect for the Hero Section 
console.log(heroSlides);
console.log(heroLinks);
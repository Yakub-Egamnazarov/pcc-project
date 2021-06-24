'use strict';

// variables and constants for the Header 
const header = document.querySelector('.header');
window.addEventListener('scroll', stickHeader);

// variables and constants for the Hero section 
const slides = document.querySelectorAll('.hero__slide');
const slideLinks = document.querySelectorAll('.hero__link')



// ========================================================
// Creating a sticky header 

function stickHeader() {
    if (window.scrollY > header.offsetHeight + 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}




// Animation effect for the Hero Section 
let counter = 1;
slideFun(counter);
let carouselTimer = setInterval(autoslide, 8000);

function autoslide() {
    counter ++;
    slideFun(counter);
}

function currentSlide(n) {
    counter = n;
    slideFun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(autoslide, 8000);
}


function slideFun(n) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('current');
    }

    for (i = 0; i < slideLinks.length; i++) {
        slideLinks[i].classList.remove('current');
    }

    if (n > slides.length) {
        counter = 1;
    }

    if (n < 1) {
        counter = slides.length;
    }

    slides[counter - 1].classList.add('current');
    slideLinks[counter - 1].classList.add('current');

}

slideLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
        currentSlide(i+1)
    })

})
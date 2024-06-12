let currentIndex = 0;

function showSlide(index) {
const slides = document.querySelectorAll('.slide');
if (index >= slides.length) {
currentIndex = 0;
} else if (index < 0) {
currentIndex = slides.length - 1;
} else {
currentIndex = index;
}

const offset = -currentIndex * 100;
document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(step) {
showSlide(currentIndex + step);
}

document.addEventListener('DOMContentLoaded', () => {
showSlide(currentIndex);
setInterval(() => {
changeSlide(1);
}, 3000);
});


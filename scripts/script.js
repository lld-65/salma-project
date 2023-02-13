// Burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav')
const burgerIcon = document.querySelector('.burger__icon');


burger.onclick = function () {
	nav.classList.toggle('nav--mobile')
	burgerIcon.classList.toggle('burger__icon--active');
	document.body.classList.toggle('no-scroll');
};
/*-------------------------Slider---------------------------------*/

const images = document.querySelectorAll('.slider .slider__line .slider__row');
const sliderLine = document.querySelector('.slider .slider__line');

let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);
document.querySelector('.slider__btn-next').addEventListener('click', function () {
    
    count++;
    if (count >= images.length) {
        count = 0;    }
    rollSlider();
});

document.querySelector('.slider__btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
/*---------------------------------------------------------------*/



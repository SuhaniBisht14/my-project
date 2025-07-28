let searchBox = document.querySelector('.search-box');
let cartBox = document.querySelector('.cart');
let user = document.querySelector('.user');

document.querySelector('#search-icon').onclick = () => {
    searchBox.classList.toggle('active');
    cartBox.classList.remove('active');
    user.classList.remove('active');

};

document.querySelector('#cart-icon').onclick = () => {
    cartBox.classList.toggle('active');
    searchBox.classList.remove('active');
    user.classList.remove('active');
};

document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    cartBox.classList.remove('active');
    searchBox.classList.remove('active');
};

//navbar
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0);
});
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

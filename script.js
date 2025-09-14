import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const swiper = new Swiper (".swiper", {
    allowSlideNext: true,
    allowSlidePrev: true,
    autoplay: false,
    effect: 'slide',
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
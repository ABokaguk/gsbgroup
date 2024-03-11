document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.news-image-slider', {
        slidesPerView: 3,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
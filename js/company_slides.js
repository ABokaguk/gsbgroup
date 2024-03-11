document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.rights-swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});

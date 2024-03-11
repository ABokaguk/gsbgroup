document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.image-slider', {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: null,
            prevEl: null,
        },
    });

    var swiper = new Swiper('.news-image-slider', {
        slidesPerView: 3,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
});
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.rights-swiper', {
        // Опции свайпера здесь
        slidesPerView: 4, // Устанавливает количество отображаемых слайдов
        spaceBetween: 10, // Устанавливает расстояние между слайдами
        loop: true, // Позволяет зациклить слайды
        navigation: {
            nextEl: '.swiper-button-next', // Кнопка "следующий слайд"
            prevEl: '.swiper-button-prev', // Кнопка "предыдущий слайд"
        },
    });
});

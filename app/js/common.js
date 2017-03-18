// SLIDER
(function() {
  'use strict';
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    speed: 2000,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  });
})();

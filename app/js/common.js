// SLIDER
(function() {
  'use strict';
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    slidesPerView: 1
  });
})();

// Video
(function(){
  function setClickHandler(id, fn) {
    document.getElementById(id).onclick = fn;
  }

  setClickHandler('video', function(e) {
    var className = e.target.className;
      ~className.indexOf('video') &&
        BigPicture({
          el: e.target,
          vidSrc: e.target.getAttribute('vidSrc'),
          noLoader: true
        });
    })
})();


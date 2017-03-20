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
    if(id in window) {
      document.getElementById(id).onclick = fn;
    }
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

// Mobile menu
(function(){
  var myMenu = document.querySelector(".menu-mobile");
  var oppMenu = document.querySelector(".toggle-menu");
  var oppMenuFooter = document.querySelector(".toggle-menu--white");
  function toggleClassMenu(e) {
    myMenu.classList.add("menu--animatable");
    if(!myMenu.classList.contains("menu--visible")) {
      myMenu.classList.add("menu--visible");
      document.body.classList.add('mobile-layout');
    } else {
      myMenu.classList.remove("menu--visible");
      document.body.classList.remove('mobile-layout');
    }
  }

  function OnTransitionEnd() {
    myMenu.classList.remove("menu--animatable");
  }

  myMenu.addEventListener("transitionend", OnTransitionEnd, false);
  oppMenu.addEventListener("click", toggleClassMenu, false);
  oppMenuFooter.addEventListener("click", toggleClassMenu, false);
  myMenu.addEventListener("click", toggleClassMenu, false);

})();


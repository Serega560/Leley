import {initSwiperReviews} from "./reviews.js";
import {initSwiperProducts} from "./products.js";


window.addEventListener('DOMContentLoaded', () => {
  initSwiperProducts();
  initSwiperReviews();

  new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".swiper-slider__arrow--next",
      prevEl: ".swiper-slider__arrow--prev",
    },

    grabCursor: true,
    slideToClickedSlide: true,
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});

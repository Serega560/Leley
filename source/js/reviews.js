
const swiperReviews = document.querySelector('[data-swiper="reviews"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="reviews"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="reviews"]');

const initSwiperReviews = () => new window.Swiper(swiperReviews, {

  // Параметры
  direction: 'horizontal',
  loop: true,
  effect: 'slider',
  initialSlide: 0,
  speed: 2500,

  // Пагинация
  navigation: {
    nextEl: swiperButtonNext,
    prevEl: swiperButtonPrev,
  },
  // breakpoints: {
  //   1200: {
  //     spaceBetween: 20, initialSlide: 0
  //   },
  //
  //   768: {
  //     spaceBetween: 30, initialSlide: 0
  //   },
  //
  //   350: {
  //     spaceBetween: 20,
  //   },
  // },

  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  //
  // effect: 'coverflow',
  //
  // coverFlowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true,
  // },
});

export {initSwiperReviews};

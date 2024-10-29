const swiperProducts = document.querySelector('[data-swiper="products"]');
// const swiperButtonPrev = document.querySelector('[data-swiper="prev"]');
// const swiperButtonNext = document.querySelector('[data-swiper="next"]');


const initSwiperProducts = () => new window.Swiper(swiperProducts, {

  // Параметры
  direction: 'horizontal',
  loop: false,
  // centeredSlides: true,
  // slidesPerView: '1',
  // initialSlide: 2.4,
  // spaceBetween: 15,
  speed: 5000,

  // navigation: {
  //   nextEl: swiperButtonNext,
  //   prevEl: swiperButtonPrev,
  // },
  // breakpoints: {
  //   1200: {
  //     spaceBetween: 20, initialSlide: 0
  //   },
  //
  //   768: {
  //     spaceBetween: 10, initialSlide: 0
  //   },
  //
  //   350: {
  //     spaceBetween: 5,
  //   },
  // },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  // effect: 'coverflow',
  //
  // coverFlowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true,
  // },

  effect: 'cube',

  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },

  grabCursor: true,
})


export {initSwiperProducts};

/* в этот файл добавляет скрипты*/
const header = document.querySelector('.header');
const button = header.querySelector('.header__burger');

button.addEventListener('click', () => header.classList.toggle('header--nav-opened'));


const rangeSliderInit = () => { // создаем функцию инициализации слайдера
  const range = document.getElementById('range-www');
  const inputMin = document.getElementById('min');
  const inputMax = document.getElementById('max');

  if (!range || !inputMin || !inputMax) return //

  const inputs = [inputMin, inputMax];

  noUiSlider.create(range, {
      start: [0, 900],
      connect: true,
      range: {
        'min': 0,
        'max': 1000
      },
      step: 1,
    }
  )

  range.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener('change', function () {
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () {
    range.noUiSlider.set([null, this.value]);
  });

}

const init = () => {
  rangeSliderInit()
}

window.addEventListener('DOMContentLoaded', init);


 new Swiper('.swiper', {
  // Параметры
  direction: 'horizontal',
  loop: true,

  // Кнопки
  navigation: {
    nextEl: '.swiper-slider__arrow--next',
    prevEl: '.swiper-slider__arrow--prev',
  },

  // Пагинация
  pagination: {
    el: '.hero__pagination-list',
    clickable: true,
    dynamicBullets: true,
  },
  grabCursor: true,
  slideToClickedSlide: true,
});

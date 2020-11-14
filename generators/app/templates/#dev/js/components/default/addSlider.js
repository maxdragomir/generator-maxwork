// Slider


let swiperSlider = new Swiper(`.${lotteryName}-js-slider`, {

  effect: 'slide',
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  simulateTouch: true,
  shortSwipes: false,
  longSwipes: true,
  longSwipesRatio: 0.1,
  longSwipesMs: 50,
  speed: 1000,

  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: `.${lotteryName}-slider__pagination`,
    clickable: true,
  },
  navigation: {
    nextEl: `.${lotteryName}-slider__button--next`,
    prevEl: `.${lotteryName}-slider__button--prev`,
  },

});


window.addEventListener("resize", function(event) {
  swiperSlider.update();
});

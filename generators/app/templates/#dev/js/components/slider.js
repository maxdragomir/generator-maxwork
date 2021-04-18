// Slider


let swiperSlider = new Swiper(`.${lotteryName}-js-slider`, {

  slidesPerView: 2,
  slidesPerGroup: 2,
  slidesPerColumn: 2,
  effect: 'slide',
  direction: 'horizontal',
  loop: false,
  loopFillGroupWithBlank: false,
  grabCursor: true,
  simulateTouch: true,
  shortSwipes: false,
  longSwipes: true,
  longSwipesRatio: 0.1,
  longSwipesMs: 50,
  speed: 1000,
  watchSlidesVisibility: true,
  slidesPerColumnFill: 'row',

  // autoplay: {
  //   delay: 3000,
  // },
  pagination: {
    el: `.${lotteryName}-slider__pagination`,
    clickable: true,
  },

  breakpoints: {
    1301: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      slidesPerColumn: 1,
    },
  }

});


window.addEventListener("resize", function(event) {
  swiperSlider.update();
});

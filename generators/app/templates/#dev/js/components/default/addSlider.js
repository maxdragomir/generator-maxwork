// Slider

// let sliderEffect;
// if(is_explorer) {
//   sliderEffect = 'fade'
// } else {
//   sliderEffect = 'cube'
// }

let swiperSlider = new Swiper(`.${lotteryName}-slider`, {

  direction: 'horizontal',
  loop: false,
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
  effect: 'fade',
  // pagination: {
  //   el: `.${lotteryName}-slider__pagination`,
  //   clickable: false,
  // },
  navigation: {
    nextEl: `.${lotteryName}-slider__button--next`,
    prevEl: `.${lotteryName}-slider__button--prev`,
  },

});


window.addEventListener("resize", function(event) {
  swiperSlider.update();
});
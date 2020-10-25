// Slider thumbs


let swiperNav = new Swiper(`.${lotteryName}-js-slider-nav`, {

  direction: 'horizontal',
  slidesPerView: 5,

  grabCursor: true,
  simulateTouch: true,
  shortSwipes: false,
  longSwipes: true,
  longSwipesRatio: 0.1,
  longSwipesMs: 50,
  watchSlidesVisibility: true,

  effect: 'slide',

});

let swiperBody = new Swiper(`.${lotteryName}-js-slider-body`, {

  direction: 'horizontal',
  slidesPerView: 1,

  grabCursor: false,
  simulateTouch: true,
  shortSwipes: false,
  longSwipes: true,
  longSwipesRatio: 0.1,
  longSwipesMs: 50,


  effect: 'slide',

  thumbs: {
    swiper: swiperNav
  },

  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },

  on: {
    slideChangeTransitionStart: function (swiper) {

      let activeIndex = this.activeIndex + 1;

      let activeSlide = document.querySelector(`.${lotteryName}-slider-body .swiper-slide:nth-child(${activeIndex})`);

      swiper.el.style.height = activeSlide.scrollHeight + 'px';
    },
    slideChange: function (swiper) {

      let activeIndex = this.activeIndex + 1;

      let activeSlide = document.querySelector(`.${lotteryName}-slider-nav .swiper-slide:nth-child(${activeIndex})`);
      let nextSlide = document.querySelector(`.${lotteryName}-slider-nav .swiper-slide:nth-child(${activeIndex + 1})`);
      let prevSlide = document.querySelector(`.${lotteryName}-slider-nav .swiper-slide:nth-child(${activeIndex - 1})`);

      if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
        this.thumbs.swiper.slideNext()
      } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
        this.thumbs.swiper.slidePrev()
      }
      swiper.el.style.height = activeSlide.scrollHeight + 'px';

      setTimeout(function () {
        AOS.refresh();
      }, 500);
    }
  }

});



window.addEventListener("resize", function(event) {
  swiperNav.update();
  swiperBody.update();
});

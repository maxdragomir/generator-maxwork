/* add class with interval: */
// =====================================================================================================================


const swapClass = (el, intervalTime) => {
  setTimeout(function () {
    el[0].classList.add(`${lotteryName}-show`);


    setInterval(function () {
      el.forEach(function (item) {
        item.classList.toggle(`${lotteryName}-show`);
      });

    }, intervalTime);

  } ,1000);
};

// setInterval(function () {
//
//   elLeft.forEach(function (item) {
//     item.classList.remove(`${lotteryName}-animate__block--is-show`);
//   });
//   elRight.forEach(function (item) {
//     item.classList.remove(`${lotteryName}-animate__block--is-show`);
//   });
//
//   elLeft[imageCount].classList.add(`${lotteryName}-animate__block--is-show`);
//   elRight[imageCount].classList.add(`${lotteryName}-animate__block--is-show`);
//
//   if(imageCount < elLeft.length - 1) {
//     imageCount++
//   } else {
//     imageCount = 0
//   }
//
// }, 3000);

// setInterval(function() {
//   animate.removeClass('show').filter(animate[imageCount]).toggleClass('show');
//   imageCount < animate.length - 1 ? imageCount++ : imageCount = 0;
// }, 5000);

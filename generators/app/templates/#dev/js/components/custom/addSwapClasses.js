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

// setInterval(function() {
//   animate.removeClass('show').filter(animate[imageCount]).toggleClass('show');
//   imageCount < animate.length - 1 ? imageCount++ : imageCount = 0;
// }, 5000);

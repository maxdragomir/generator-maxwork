/* add class with interval: */
// =====================================================================================================================


const swapClass = (el, intervalTime, activeClass) => {
  let imageCount = 0;

  setInterval(function () {

    el.forEach(function (item) {
      item.classList.remove(activeClass);
    });

    el[imageCount].classList.add(activeClass);

    if(imageCount < el.length - 1) {
      imageCount++
    } else {
      imageCount = 0
    }

  }, intervalTime);

};


// setInterval(function() {
//   animate.removeClass('show').filter(animate[imageCount]).toggleClass('show');
//   imageCount < animate.length - 1 ? imageCount++ : imageCount = 0;
// }, 5000);




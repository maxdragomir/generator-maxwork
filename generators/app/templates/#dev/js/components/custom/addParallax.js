// Parallax


function simpleParallax(intensity, element) {
  window.addEventListener('scroll', function() {
    let scrolled = window.pageYOffset;
    let calc = -(scrolled * intensity);
    element.style.transform = `translate3d(0,${calc}px,0)`;
  });
}

let elem = Array.prototype.slice.call(document.querySelectorAll(`.${lotteryName}-js-parallax`));
elem.forEach((i) => {
  simpleParallax(0.1, i);
});

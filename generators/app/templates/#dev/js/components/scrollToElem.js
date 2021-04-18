// Scroll to elem


function useScrollTo(elem, duration) {
  let jsScrollTo = document.querySelectorAll(`.${lotteryName}-js-scroll-to`);
  let element = document.querySelector(elem);

  for (var i = 0; i < jsScrollTo.length; i++) {
    jsScrollTo[i].addEventListener("click", function() {
      scrollToElement(element, duration);
      return false;
    });
  }
}


function scrollToY (y, duration = 0, element = document.documentElement) {
  // cancel if already on target position
  if (element.scrollTop === y) return;

  const cosParameter = (element.scrollTop - y) / 2;
  let scrollCount = 0, oldTimestamp = null;

  function step (newTimestamp) {
    if (oldTimestamp !== null) {
      // if duration is 0 scrollCount will be Infinity
      scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
      if (scrollCount >= Math.PI) return element.scrollTop = y;
      element.scrollTop = cosParameter + y + cosParameter * Math.cos(scrollCount);
    }
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}
function scrollToTop(duration = 0) {
  scrollToY(0, duration, document.documentElement);
}
function scrollToId(id, duration = 0) {
  const offset = Math.round(document.getElementById(id).getBoundingClientRect().top);
  scrollToY(document.documentElement.scrollTop + offset, duration);
}
function scrollToElement(element, duration = 0) {
  // const offset = Math.round(element.getBoundingClientRect().top);
  scrollToY(element.offsetTop, duration);
}

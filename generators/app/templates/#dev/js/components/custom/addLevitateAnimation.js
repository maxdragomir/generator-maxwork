// Random levitate elements

function tweenProperty(target, prop, min, max) {

  var randomDur = gsap.utils.random(5, 7, 3.5);
  var randomDelay = gsap.utils.random(0.2, 1, 0.5);

  gsap.to(target, {
    [prop]: gsap.utils.random(min, max),
    duration: randomDur,
    delay: randomDelay,
    ease: 'none',
    yoyo: true,
    force3D: true,
    rotate: 0.01,
    skewX: 0.01,
    onComplete: tweenProperty,
    onCompleteParams: [target, prop, min, max]
  });

}
// AOS


if(is_mob) {
  AOS.init({
    disable: true
  });
} else {
  AOS.init({
    duration: 1000,
    easing: 'ease',
    once: true,
  });
}

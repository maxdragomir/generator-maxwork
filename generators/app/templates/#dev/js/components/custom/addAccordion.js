// Accordion


function addAccordion(element, nameBlock) {
  let accordion = Array.prototype.slice.call(myApp.querySelectorAll(element));
  accordion.forEach(function (item) {
    let btnToggle = item.querySelector(`.${lotteryName}-js-btn-toggle`),
      headerToggle = item.querySelector(`.${lotteryName}-js-header-toggle`),
      bodyToggle = item.querySelector(`.${lotteryName}-js-body-toggle`);

    headerToggle.addEventListener('click', function () {
      setTimeout( () => {
        btnToggle.classList.toggle(`${lotteryName}-${nameBlock}__button--is-open`);
        bodyToggle.classList.toggle(`${lotteryName}-${nameBlock}__body--is-open`);
        AOS.refresh();
      }, 50);
    });
  });
}

/* Addition Btns: */
// =====================================================================================================================


let additionBlock = document.querySelector(`.${lotteryName}-addition`),
  svgOpen = document.querySelector(`.${lotteryName}-addition__svg-open`),
  svgClose = document.querySelector(`.${lotteryName}-addition__svg-close`);

if(additionBlock) {
  svgClose.style.display = "none";

  setTimeout(function () {
    additionBlock.classList.remove(`${lotteryName}-addition--is-show`);

    if(hash !== '' && !isRtl && hash !== 'rtl' && hash !== 'logged') {
      additionBlock.classList.add(`${lotteryName}-addition--is-fixed`);
      svgCheck();
    }
  }, 1000);


  additionBlock.addEventListener('click', (e) => {
    const target = e.target;

    if (!target.classList.contains(`${lotteryName}-addition`)) return;

    additionBlock.classList.toggle(`${lotteryName}-addition--is-fixed`);
    svgCheck();
  });

  document.addEventListener('keydown', (e) => {
    const keyCode = e.code;

    if (keyCode === 'Space' && e.shiftKey) {
      additionBlock.classList.toggle(`${lotteryName}-addition--is-fixed`);
      svgCheck();
    }
  });

}

function svgCheck() {
  if (additionBlock.classList.contains(`${lotteryName}-addition--is-fixed`)) {
    svgOpen.style.display = "none";
    svgClose.style.display = "block";
  } else {
    svgOpen.style.display = "block";
    svgClose.style.display = "none";
  }
}
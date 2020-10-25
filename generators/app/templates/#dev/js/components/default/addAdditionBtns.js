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
    let projectName = location.href.split('/')[3];


    // go to lottery
    if (keyCode === 'Digit1' && e.shiftKey) {
      if(location.hostname === 'localhost') {
        location.href = `lottery.html`;
      } else {
        location.href = `index.php`;
      }
    }


    // go to raffle
    <%_ if (raffle) { -%>
      if (keyCode === 'Digit2' && e.shiftKey) {
        if(location.hostname === 'localhost') {
          location.href = `raffle.html`;
        } else {
          location.href = `raffle.php`;
        }
      }
    <%_ } -%>


    // go to account
    <%_ if (account) { -%>
      if (keyCode === 'Digit3' && e.shiftKey) {
        if(location.hostname === 'localhost') {
          location.href = `account.html`;
        } else {
          location.href = `account.php`;
        }
      }
    <%_ } -%>


    // active RTL on page
    if (e.shiftKey && keyCode === 'Digit4') {
      location.href = `?rtl`;
    }


    // fix Sidebar
    if (keyCode === 'Backquote' && e.shiftKey) {
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

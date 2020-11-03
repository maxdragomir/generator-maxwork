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


    // go to lottery
    if (e.shiftKey && keyCode === 'Digit1') {

      if (location.hostname === 'localhost') {
        location.pathname = `lottery.html`;
      } else {
        location.pathname = hashArray[1] + `/index.php`;
      }

    }


    // go to raffle
    <%_ if (raffle) { -%>
      if (e.shiftKey && keyCode === 'Digit2') {
        if(location.hostname === 'localhost') {
          location.pathname = `raffle.html`;
        } else {
          location.pathname = hashArray[1] + `/raffle.php`;
        }
      }
    <%_ } -%>


    // go to account
    <%_ if (account) { -%>
      if (e.shiftKey && keyCode === 'Digit3') {

        if (location.hostname === 'localhost') {
          location.pathname = `account.html`;
        } else {
          location.pathname = hashArray[1] + `/account.php`;
        }

      }
    <%_ } -%>


    // active RTL state
    if (e.altKey && keyCode === 'Digit1') {

      if(location.search === '?rtl') {
        location.search = '';
        location.href = location.origin + location.pathname;
      } else {
        location.search = `?rtl`;
      }

    }


    // active logged state
    if (e.altKey && keyCode === 'Digit2') {
      if (pageType === 'index') {

        if(location.search === '?logged') {
          location.search = ``;
          location.href = location.origin + location.pathname;
        } else {
          location.search = `?logged`;
        }

      } else if (pageType === 'lottery') {

        if(location.search === '?logged') {
          location.search = ``;
          location.href = location.origin + location.pathname;
        } else {
          location.search = `?logged`;
        }

      }
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

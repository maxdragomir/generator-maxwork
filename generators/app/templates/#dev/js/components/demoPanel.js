// Demo Panel


let demoPanel = document.querySelector(`.${lotteryName}-demo`),
  svgOpen = document.querySelector(`.${lotteryName}-demo__lock-icon--open`),
  svgClose = document.querySelector(`.${lotteryName}-demo__lock-icon--close`),
  svgLock = document.querySelector(`.${lotteryName}-demo__lock`),
  switchButton = document.querySelector(`.${lotteryName}-demo__switch-button`),
  block = Array.prototype.slice.call(document.querySelectorAll(`.${lotteryName}-demo__block`)),
  infoBtn = document.querySelector(`.${lotteryName}-demo__name-info`),
  infoWrapper = document.querySelector(`.${lotteryName}-demo__block-keys .${lotteryName}-demo__wrapper`),
  infoBLock = document.querySelector(`.${lotteryName}-demo__block-keys`),
  toggleSideCheckbox = document.querySelector(`.${lotteryName}-demo__input--side`),
  toggleLoadCheckbox = document.querySelector(`.${lotteryName}-demo__input--load`),
  settingsBtn = document.querySelector(`.${lotteryName}-demo__settings`),
  settingsWrapper = document.querySelector(`.${lotteryName}-demo__block-settings .${lotteryName}-demo__wrapper`),
  settingsBLock = document.querySelector(`.${lotteryName}-demo__block-settings`),
  buttonStates = Array.prototype.slice.call(document.querySelectorAll(`.${lotteryName}-demo__block-states button`)),
  pageButtons = Array.prototype.slice.call(document.querySelectorAll(`.${lotteryName}-demo__block-pages a`)),
  countPage = 1,
  countStates = 1;

if(demoPanel) {

  // default demoPanel
  svgClose.style.display = "none";
  checkPanelSide();
  checkPanelLoad();

  let header;
  if(is_mob) {
    header = document.querySelector('.header');
  } else {
    header = document.getElementById('fTop');
  }
  if(header) {
    let headerHeight = header.offsetHeight;

    demoPanel.style.top = `${headerHeight}px`;
    demoPanel.style.height = `calc(100vh - ${headerHeight}px)`;
  }

  // btn switch
  switchButton.addEventListener('click', function () {
    toggleSideBar();
  });

  // delete empty block
  block.forEach(function (item) {
    let buttonsInBlock = Array.prototype.slice.call(item.querySelectorAll(`.${lotteryName}-demo__wrapper button`)),
      linkInBlock = Array.prototype.slice.call(item.querySelectorAll(`.${lotteryName}-demo__wrapper a`));

    if(!item.classList.contains(`${lotteryName}-demo__block-keys`) && !item.classList.contains(`${lotteryName}-demo__block-settings`)) {
      if(!linkInBlock.length && !buttonsInBlock.length) {
        item.parentNode.removeChild(item);
      }
    }
  });

  // toggle load
  toggleLoadCheckbox.addEventListener('click',  function () {
    if(this.checked) {
      localStorage.load = 'yes'
    } else {
      localStorage.load = 'no'
    }
  });

  // toggle side
  toggleSideCheckbox.addEventListener('click',  function () {
    if(this.checked) {
      localStorage.side = 'right'
    } else {
      localStorage.side = 'left'
    }
    checkPanelSide();
  })

  // info btn
  infoBtn.addEventListener('click', function () {
    infoBLock.classList.toggle(`${lotteryName}-demo__block-keys--is-show`);
  });

  //settings btn
  settingsBtn.addEventListener('click', function () {
    settingsBLock.classList.toggle(`${lotteryName}-demo__block-settings--is-show`);
  });

  // fix sidebar
  svgLock.addEventListener('click', function () {
    toggleSideBar();
  });

  // page links
  pageButtons.forEach(function (item) {
    let text = item.querySelector('span').innerText.toLowerCase();

    addKeyLink(text, countPage);

    countPage++;
  });

  // btn states
  buttonStates.forEach(function (item) {
    item.addEventListener('click', () => {
      let state = item.getAttribute('title');

      if(location.search === '?' + state) {
        location.href = location.origin + location.pathname;
      } else {
        location.search = `?` + state;
      }

    });

    let text = item.querySelector('span').innerText.toLowerCase();
    addKeyState(text, countStates);
    countStates++;
  });

  // key sidebar
  document.addEventListener('keydown', (e) => {
    const keyCode = e.code;

    if (keyCode === 'Backquote' && e.shiftKey) {
      toggleSideBar();
    }
    if (e.shiftKey && keyCode === 'KeyI') {
      infoBLock.classList.toggle(`${lotteryName}-demo__block-keys--is-show`);
    }
    if (e.shiftKey && keyCode === 'KeyS') {
      settingsBLock.classList.toggle(`${lotteryName}-demo__block-settings--is-show`);
    }

  });

}

function checkPanelLoad() {
  if(!localStorage.getItem('load') || localStorage.getItem('load') === 'no') {
    toggleLoadCheckbox.checked = false;
    // demoPanel.classList.add(`${lotteryName}-demo--is-show`);
    // setTimeout(function () {
    //   demoPanel.classList.remove(`${lotteryName}-demo--is-show`);
    // if(hash !== '') {
    //   toggleSideBar();
    // }
    // }, 1000);
  } else {
    toggleLoadCheckbox.checked = true;
    toggleSideBar();
  }
}
function checkPanelSide() {
  if(!localStorage.getItem('side') || localStorage.getItem('side') === 'right') {
    demoPanel.classList.remove(`${lotteryName}-demo--reverse`);
    toggleSideCheckbox.checked = true;
  } else {
    demoPanel.classList.add(`${lotteryName}-demo--reverse`);
    toggleSideCheckbox.checked = false;
  }
}

function addKeyLink(pageName, keyNum) {

  let pBlock = document.createElement('p'),
    spanKeyName = document.createElement('span'),
    spanKeyDescription = document.createElement('span');

  pBlock.classList.add(`${lotteryName}-demo__key`);
  pBlock.classList.add(`${lotteryName}-demo__key--page`);
  spanKeyName.classList.add(`${lotteryName}-demo__key-text`);
  spanKeyName.innerText = `shift + ${keyNum}`;
  spanKeyDescription.classList.add(`${lotteryName}-demo__key-text`);
  spanKeyDescription.classList.add(`${lotteryName}-demo__key-text--description`);
  spanKeyDescription.innerText = `go to ${pageName} page`;

  pBlock.appendChild(spanKeyName);
  pBlock.appendChild(spanKeyDescription);
  infoWrapper.appendChild(pBlock);

  document.addEventListener('keydown', (e) => {
    const keyCode = e.code;
    if (e.shiftKey && keyCode === `Digit${keyNum}`) {

      removeParam();

      if (location.hostname === 'localhost') {
        location.pathname = `${pageName}.html`;
      } else {
        if (pageName === 'lottery') {
          location.pathname = hashArray[1] + `/index.php`;
        } else {
          location.pathname = hashArray[1] + `/${pageName}.php`;
        }
      }

    }
  });
}

function addKeyState(stateName, keyNum) {
  let pBlock = document.createElement('p'),
    spanKeyName = document.createElement('span'),
    spanKeyDescription = document.createElement('span');

  pBlock.classList.add(`${lotteryName}-demo__key`);
  pBlock.classList.add(`${lotteryName}-demo__key--state`);
  spanKeyName.classList.add(`${lotteryName}-demo__key-text`);
  spanKeyName.innerText = `alt + ${keyNum}`;
  spanKeyDescription.classList.add(`${lotteryName}-demo__key-text`);
  spanKeyDescription.classList.add(`${lotteryName}-demo__key-text--description`);
  spanKeyDescription.innerText = `active ${stateName} state`;

  pBlock.appendChild(spanKeyName);
  pBlock.appendChild(spanKeyDescription);
  infoWrapper.appendChild(pBlock);

  document.addEventListener('keydown', (e) => {
    const keyCode = e.code;
    if (e.altKey && keyCode === `Digit${keyNum}`) {

      if(location.search === `?${stateName}`) {
        location.href = location.origin + location.pathname;
      } else {
        location.search = `?${stateName}`;
      }

    }
  });

}

function toggleSideBar() {
  demoPanel.classList.toggle(`${lotteryName}-demo--is-fixed`);
  switchButton.classList.toggle(`${lotteryName}-demo__switch-button--is-active`);
  svgCheck();
}

function removeParam() {
  let query = window.location.search.substring(1);
  if(query.length) {
    if(window.history !== undefined && window.history.pushState !== undefined) {
      window.history.pushState({}, document.title, window.location.pathname);
    }
  }
}

function svgCheck() {
  if (demoPanel.classList.contains(`${lotteryName}-demo--is-fixed`)) {
    svgOpen.style.display = "none";
    svgClose.style.display = "block";
  } else {
    svgOpen.style.display = "block";
    svgClose.style.display = "none";
  }
}

// Vars
// =====================================================================================================================


let lotteryName     = '<%= project %>',
    html            = document.querySelector('html'),
    body            = document.querySelector('body'),
    ltr             = document.getElementById('ltr'),
    rtl             = document.getElementById('rtl'),
    wrapper         = document.querySelector(`.${lotteryName}-wrapper`),
    hash            = location.search.replace(/\?/, ""),
    hashArray       = location.pathname.split('/'),
    pageType        = hashArray[hashArray.length - 1].split('.')[0],
    is_rtl           = hashArray[hashArray.length - 1].split('.')[0] === 'rtl' || hash === 'rtl',
    direction       = false;
